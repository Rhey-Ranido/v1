import { config } from "./config.js";
import { getElement, getElements } from "./utils.js";

const setupContent = () => {

  const setupCover = () => {
    const coverPhotoContainer = getElement(".cover-photo")
    const coverPhotoImg = document.createElement("img")
    coverPhotoImg.classList.add("cover-photo__image")
    coverPhotoImg.alt = "cover photo"
    coverPhotoImg.src = config.identity.cover
    coverPhotoContainer.appendChild(coverPhotoImg)
  }

  const setupProfile = () => {
    const profileContainer = getElement(".profile")
    profileContainer.style.height = "30px"
    const profileImg = document.createElement("img")
    profileImg.classList.add("profile__image")
    profileImg.src = config.identity.profile
    profileImg.alt = "profile"
    const profileImageContainer = document.createElement("div")
    profileImageContainer.classList.add("profile__image-container")
    profileImageContainer.appendChild(profileImg)
    profileContainer.appendChild(profileImageContainer)
  }

  const setupInfo = () => {

    // info identity
    const infoNameText = getElement(".info__name")
    const infoEducationText = getElement(".info__education")
    infoNameText.textContent = config.identity.name
    infoEducationText.textContent = `${config.identity.course} @ ${config.identity.school}`
    
    // info socials
    const socialsContainer = getElement(".info__socials")

    for (let link in config.socials) {
      const infoSocialsLink = document.createElement('a')
      infoSocialsLink.textContent = link
      infoSocialsLink.href = config.socials[link]
      infoSocialsLink.target = "_blank"
      infoSocialsLink.classList.add("text--base", "text-hover")

      socialsContainer.appendChild(infoSocialsLink)
    }
  }

  const setupProjects = () => {
    const projectsContainer = getElement(".projects__content")

    for (let i in config.projects) {
      const project = config.projects[i]

      const projectContainer = document.createElement("div")
      const imageContainer = document.createElement("div")
      const image = document.createElement("img")
      const infoContainer = document.createElement("div")
      const title = document.createElement("span")
      const description = document.createElement("span")
      const techStackContainer = document.createElement("div")
      
      projectContainer.classList.add("project")
      imageContainer.classList.add("project__image-container")
      image.classList.add("project__image")
      infoContainer.classList.add("project__info-container")
      title.classList.add("text--large")
      description.classList.add("text--base")
      techStackContainer.classList.add("project__techStack")
      
      image.src = project.image
      imageContainer.appendChild(image)

      projectContainer.appendChild(imageContainer)
      
      title.textContent = project.title
      infoContainer.appendChild(title)

      description.textContent = project.description
      infoContainer.appendChild(description)
      
      if (config.show.techStack) {
        for (let j in project.techStack) {
          const techBadge = document.createElement("div")
          techBadge.classList.add("badge", "text--small")
          techBadge.textContent = project.techStack[j]
          techStackContainer.appendChild(techBadge)
        }
      }
       
      infoContainer.appendChild(techStackContainer)
      projectContainer.appendChild(infoContainer)
      projectsContainer.appendChild(projectContainer)
    }
  }

  const setupContact = () => {
    u

  }

  if (config.show.cover) 
    setupCover() 
  else 
    document.body.style.paddingTop = "30px"

  if (config.show.profile) 
    setupProfile()

  setupInfo()
  setupProjects()
  setupContact()
}

window.addEventListener("load", () => {
  setupContent()
})