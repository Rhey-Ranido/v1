/**
 * Portfolio Main JavaScript
 * Handles all interactivity, animations, and dynamic content loading
 */

// ===================================
// Global Variables and State
// ===================================

let currentTheme = 'dark';
let isMenuOpen = false;
let scrollPosition = 0;

// ===================================
// DOM Elements
// ===================================

const elements = {
  // Navigation
  navbar: null,
  navMenu: null,
  navLogo: null,
  logoContainer: null,
  mobileMenuToggle: null,
  themeToggle: null,
  
  // Content containers
  heroSection: null,
  projectsGrid: null,
  skillsGrid: null,
  footerSocial: null,
  
  // Dynamic content elements
  developerName: null,
  developerTitle: null,
  developerTagline: null,
  developerLocation: null,
  developerEmail: null,
  aboutBio: null,
  avatarInitials: null,
  footerName: null
};

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function calls
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

/**
 * Get initials from a name
 */
function getInitials(name) {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

/**
 * Smooth scroll to element with snap support
 */
function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    // Use scrollIntoView for better snap compatibility
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}

/**
 * Check if element is in viewport
 */
function isInViewport(element, threshold = 0.1) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold &&
    rect.left <= windowWidth * (1 - threshold) &&
    rect.right >= windowWidth * threshold
  );
}

// ===================================
// Theme Management
// ===================================

/**
 * Initialize theme from localStorage or system preference
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);
}

/**
 * Apply theme to document
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
  localStorage.setItem('portfolio-theme', theme);
  
  // Update theme toggle button state
  if (elements.themeToggle) {
    elements.themeToggle.setAttribute('aria-label', 
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// ===================================
// Navigation Management
// ===================================

/**
 * Initialize navigation
 */
function initializeNavigation() {
  populateNavigation();
  setupNavigationEventListeners();
  updateActiveNavLink();
}

/**
 * Populate navigation menu from config
 */
function populateNavigation() {
  if (!elements.navMenu || !portfolioConfig.navigation) return;
  
  elements.navMenu.innerHTML = '';
  
  portfolioConfig.navigation.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.href = item.href;
    a.textContent = item.name;
    a.addEventListener('click', handleNavClick);
    
    li.appendChild(a);
    elements.navMenu.appendChild(li);
  });
}

/**
 * Handle navigation link clicks
 */
function handleNavClick(e) {
  e.preventDefault();
  const href = e.target.getAttribute('href');
  
  // Close mobile menu if open
  if (isMenuOpen) {
    toggleMobileMenu();
  }
  
  // Smooth scroll to section
  smoothScrollTo(href);
  
  // Update URL without page reload
  history.pushState(null, null, href);
  
  // Update active nav link
  updateActiveNavLink();
}

/**
 * Setup navigation event listeners
 */
function setupNavigationEventListeners() {
  // Mobile menu toggle
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Theme toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Logo click
  if (elements.navLogo) {
    elements.navLogo.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo('#home');
      history.pushState(null, null, '#home');
      updateActiveNavLink();
    });
  }
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  
  elements.navMenu.classList.toggle('active', isMenuOpen);
  elements.mobileMenuToggle.classList.toggle('active', isMenuOpen);
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

/**
 * Update active navigation link based on current section
 */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = elements.navMenu.querySelectorAll('a');
  
  let currentSection = 'home';
  
  sections.forEach(section => {
    if (isInViewport(section, 0.3)) {
      currentSection = section.id;
    }
  });
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1); // Remove #
    link.classList.toggle('active', href === currentSection);
  });
}

/**
 * Handle navbar scroll behavior
 */
function handleNavbarScroll() {
  if (!elements.navbar) return;
  
  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > scrollPosition;
  
  if (currentScrollY > 100) {
    elements.navbar.classList.add('scrolled');
  } else {
    elements.navbar.classList.remove('scrolled');
  }
  
  scrollPosition = currentScrollY;
  updateActiveNavLink();
}

// ===================================
// Content Population
// ===================================

/**
 * Populate all dynamic content from config
 */
function populateContent() {
  populatePersonalInfo();
  populateProjects();
  populateSkills();
  populateFooterSocial();
}

/**
 * Populate personal information
 */
function populatePersonalInfo() {
  const { personal } = portfolioConfig;
  
  if (elements.developerName) elements.developerName.textContent = personal.name;
  if (elements.developerTitle) elements.developerTitle.textContent = personal.title;
  if (elements.developerTagline) elements.developerTagline.textContent = personal.tagline;
  if (elements.developerLocation) elements.developerLocation.textContent = personal.location;
  if (elements.developerEmail) {
    elements.developerEmail.textContent = personal.email;
    elements.developerEmail.href = `mailto:${personal.email}`;
  }
  if (elements.aboutBio) elements.aboutBio.textContent = personal.bio;
  if (elements.footerName) elements.footerName.textContent = personal.name;
  
  // Update avatar - use image if available, otherwise show initials
  if (elements.avatarInitials) {
    const avatarContainer = elements.avatarInitials.parentElement;
    
    if (personal.avatar) {
      // Create and load the avatar image
      const avatarImg = document.createElement('img');
      avatarImg.src = personal.avatar;
      avatarImg.alt = `${personal.name} - Profile Picture`;
      avatarImg.style.width = '100%';
      avatarImg.style.height = '100%';
      avatarImg.style.objectFit = 'cover';
      avatarImg.style.borderRadius = 'var(--radius-full)';
      
      // Handle image load success
      avatarImg.onload = function() {
        // Replace initials with image
        avatarContainer.innerHTML = '';
        avatarContainer.appendChild(avatarImg);
      };
      
      // Handle image load error - fallback to initials
      avatarImg.onerror = function() {
        console.warn('Could not load avatar image, using initials instead');
        elements.avatarInitials.textContent = getInitials(personal.name);
      };
    } else {
      // No avatar image specified, use initials
      elements.avatarInitials.textContent = getInitials(personal.name);
    }
  }
  
  // Update page title
  document.title = `${personal.name} - ${personal.title}`;
}

/**
 * Populate projects grid
 */
function populateProjects() {
  if (!elements.projectsGrid || !portfolioConfig.projects) return;
  
  elements.projectsGrid.innerHTML = '';
  
  portfolioConfig.projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    elements.projectsGrid.appendChild(projectCard);
  });
}

/**
 * Create a project card element
 */
function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', `${index * 100}`);
  
  // No longer needed since floating only happens on hover
  
  card.innerHTML = `
    <div class="project-image">
      ${project.image ? 
        `<img src="${project.image}" alt="${project.title}" loading="lazy">` :
        `<span>Project Image</span>`
      }
    </div>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-tech">
      ${project.techStack.map(tech => 
        `<span class="tech-tag">${tech}</span>`
      ).join('')}
    </div>
    <div class="project-links">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link secondary">
        Source Code
      </a>
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link primary">
        Live Demo
      </a>
    </div>
  `;
  
  return card;
}

/**
 * Populate skills grid
 */
function populateSkills() {
  if (!elements.skillsGrid || !portfolioConfig.skills) return;
  
  elements.skillsGrid.innerHTML = '';
  
  portfolioConfig.skills.forEach((skill, index) => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.textContent = skill;
    skillItem.style.animationDelay = `${index * 50}ms`;
    
    elements.skillsGrid.appendChild(skillItem);
  });
}

/**
 * Populate footer social links
 */
function populateFooterSocial() {
  if (!elements.footerSocial || !portfolioConfig.social) return;
  
  elements.footerSocial.innerHTML = '';
  
  const socialTitles = {
    github: 'GitHub',
    linkedin: 'LinkedIn', 
    gmail: 'Email'
  };
  
  Object.entries(portfolioConfig.social).forEach(([platform, url]) => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      if (platform !== 'gmail') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      link.className = 'footer-social-link';
      link.title = `Connect on ${socialTitles[platform] || platform}`;
      
      // Create SVG icon
      const iconContainer = document.createElement('span');
      iconContainer.className = 'footer-social-icon';
      
      // Load SVG icon
      loadSVGIcon(platform, iconContainer);
      
      link.appendChild(iconContainer);
      elements.footerSocial.appendChild(link);
    }
  });
}

/**
 * Load SVG icon into container
 */
function loadSVGIcon(platform, container) {
  const iconPath = `./assets/icons/${platform}.svg`;
  
  fetch(iconPath)
    .then(response => response.text())
    .then(svgContent => {
      container.innerHTML = svgContent;
    })
    .catch(error => {
      console.warn(`Could not load SVG icon for ${platform}:`, error);
      // Fallback to emoji if SVG fails to load
      const fallbackIcons = {
        github: '🔗',
        linkedin: '💼',
        gmail: '📧'
      };
      container.innerHTML = fallbackIcons[platform] || '🔗';
    });
}

/**
 * Load home logo
 */
function loadHomeLogo() {
  if (!elements.logoContainer) return;
  
  const logoPath = './assets/icons/home-logo-minimal.svg';
  
  fetch(logoPath)
    .then(response => response.text())
    .then(svgContent => {
      elements.logoContainer.innerHTML = svgContent;
    })
    .catch(error => {
      console.warn('Could not load home logo SVG:', error);
      // Fallback to initials if SVG fails to load
      elements.logoContainer.innerHTML = 'RR';
    });
}

// ===================================
// Animation Management
// ===================================

/**
 * Initialize animations
 */
function initializeAnimations() {
  // Add intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all elements with data-aos attribute
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Add stagger animation to elements
 */
function addStaggerAnimation(elements, delay = 100) {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}ms`;
  });
}


// ===================================
// Scroll Effects
// ===================================

/**
 * Initialize scroll effects
 */
function initializeScrollEffects() {
  const throttledScrollHandler = throttle(handleNavbarScroll, 10);
  window.addEventListener('scroll', throttledScrollHandler);
  
  // Initial call
  handleNavbarScroll();
}

// ===================================
// Initialization
// ===================================

/**
 * Get all DOM elements
 */
function getDOMElements() {
  // Navigation elements
  elements.navbar = document.getElementById('navbar');
  elements.navMenu = document.getElementById('nav-menu');
  elements.navLogo = document.getElementById('nav-logo');
  elements.logoContainer = document.getElementById('logo-container');
  elements.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  elements.themeToggle = document.getElementById('theme-toggle');
  
  // Content containers
  elements.heroSection = document.getElementById('home');
  elements.projectsGrid = document.getElementById('projects-grid');
  elements.skillsGrid = document.getElementById('skills-grid');
  elements.footerSocial = document.getElementById('footer-social');
  
  // Dynamic content elements
  elements.developerName = document.getElementById('developer-name');
  elements.developerTitle = document.getElementById('developer-title');
  elements.developerTagline = document.getElementById('developer-tagline');
  elements.developerLocation = document.getElementById('developer-location');
  elements.developerEmail = document.getElementById('developer-email');
  elements.aboutBio = document.getElementById('about-bio');
  elements.avatarInitials = document.getElementById('avatar-initials');
  elements.footerName = document.getElementById('footer-name');
}

/**
 * Initialize scroll indicator
 */
function initializeScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      smoothScrollTo('#projects');
    });
  }
}

/**
 * Initialize the portfolio
 */
function initializePortfolio() {
  // Get DOM elements
  getDOMElements();
  
  // Initialize theme
  initializeTheme();
  
  // Populate content from config
  populateContent();
  
  // Initialize navigation
  initializeNavigation();
  
  // Load home logo
  loadHomeLogo();
  
  // Initialize animations
  initializeAnimations();
  
  // Initialize scroll effects
  initializeScrollEffects();
  
  // Initialize scroll indicator
  initializeScrollIndicator();
  
  // Handle initial URL hash
  if (window.location.hash) {
    setTimeout(() => {
      smoothScrollTo(window.location.hash);
    }, 100);
  }
  
  console.log('✅ Portfolio initialized successfully');
}

// ===================================
// Event Listeners
// ===================================

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
  initializePortfolio();
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 768 && isMenuOpen) {
    toggleMobileMenu();
  }
}, 250));

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  if (window.location.hash) {
    smoothScrollTo(window.location.hash);
  } else {
    smoothScrollTo('#home');
  }
  updateActiveNavLink();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // Close mobile menu with Escape key
  if (e.key === 'Escape' && isMenuOpen) {
    toggleMobileMenu();
  }
  
  // Theme toggle with Ctrl/Cmd + Shift + T
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
    e.preventDefault();
    toggleTheme();
  }
});

// ===================================
// Export for potential module use
// ===================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializePortfolio,
    toggleTheme,
    smoothScrollTo
  };
}
