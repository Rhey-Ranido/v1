# Professional Portfolio Website

A clean, modern, and elegant portfolio website built with vanilla HTML, CSS, and JavaScript. Features a dark/light theme toggle, smooth animations, and responsive design.

## ✨ Features

- **Clean & Modern Design**: Minimalistic design with elegant typography
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle motion effects and hover animations
- **Easy Customization**: All content managed through a single config file
- **Semantic HTML**: Accessible and SEO-friendly structure
- **No Dependencies**: Pure vanilla JavaScript, no frameworks required

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Edit `config.js`** with your personal information
3. **Add your images** to the `assets/` folder
4. **Open `index.html`** in your browser or deploy to any web host

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and themes
├── main.js            # JavaScript functionality
├── config.js          # Your personal content (EDIT THIS!)
├── assets/            # Images and static files
│   ├── avatar.jpg     # Your profile photo (optional)
│   ├── project1.jpg   # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   └── favicon.ico    # Website icon
└── README.md          # This file
```

## ⚙️ Customization

### 1. Personal Information

Edit the `config.js` file to update your personal details:

```javascript
const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Job Title",
    tagline: "Your tagline or motto",
    bio: "Your bio paragraph...",
    email: "your.email@example.com",
    location: "Your City, Country"
  },
  // ... more sections
};
```

### 2. Projects

Add your projects to the `projects` array in `config.js`:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-demo.com",
    image: "./assets/project1.jpg"
  }
]
```

### 3. Skills & Social Links

Update the `skills` and `social` sections in `config.js`:

```javascript
skills: ["JavaScript", "React", "Node.js", "Python", "..."],
social: {
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username",
  portfolio: "https://yourwebsite.com"
}
```

### 4. Images

Add your images to the `assets/` folder:
- **Profile photo**: `avatar.jpg` (optional, will show initials if not provided)
- **Project screenshots**: `project1.jpg`, `project2.jpg`, etc.
- **Favicon**: `favicon.ico` for browser tab icon

### 5. Colors & Styling

The design uses CSS custom properties for easy theming. To customize colors, edit the `:root` section in `style.css`:

```css
:root {
  --accent-primary: #6366f1;    /* Main accent color */
  --accent-secondary: #4f46e5;  /* Hover states */
  /* ... other colors */
}
```

## 🎨 Theme System

The portfolio includes a sophisticated dark/light theme system:

- **Auto-detection**: Respects user's system preference
- **Manual toggle**: Theme toggle button in navigation
- **Persistence**: Remembers user's choice in localStorage
- **Smooth transitions**: All theme changes are animated

## 📱 Responsive Design

The layout adapts to different screen sizes:

- **Desktop** (1024px+): Full layout with sidebar navigation
- **Tablet** (768px - 1023px): Stacked layout, touch-friendly
- **Mobile** (< 768px): Mobile-first design with hamburger menu

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your portfolio folder to [Netlify](https://netlify.com)
2. Your site will be live instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts to deploy

### Traditional Web Hosting
Upload all files to your web host's public folder via FTP or file manager.

## 🎯 Performance Tips

- **Optimize images**: Compress images before adding to `assets/`
- **Use WebP format**: For better compression (optional)
- **Enable gzip**: On your web server for faster loading
- **CDN**: Consider using a CDN for global distribution

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions and titles
- Open Graph tags ready
- Fast loading times
- Mobile-friendly design

## 💡 Customization Ideas

- Add a blog section
- Include testimonials
- Add a services section
- Integrate with a CMS
- Add Google Analytics
- Include a contact form backend

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths in `config.js`
- Ensure images are in the `assets/` folder
- Check image file extensions

**Theme not switching?**
- Check browser console for JavaScript errors
- Ensure `main.js` is loading properly

**Mobile menu not working?**
- Verify JavaScript is enabled
- Check for console errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that others might benefit from, consider submitting a pull request!

## 💬 Support

If you have questions or need help customizing your portfolio, feel free to open an issue or reach out.

---

**Happy coding!** 🚀

