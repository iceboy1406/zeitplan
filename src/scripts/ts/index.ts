const header = document.getElementsByTagName('header')[0]
const navToggle: HTMLDivElement | null = document.querySelector('.nav-toggle')
const navItem: HTMLDivElement | null = document.querySelector('.nav-item')
// toggle nav item visibility by clicking toggle icon
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('close')
  navItem?.classList.toggle('hide')
})

// Handle scroll to element with id href value
const localLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.local-link')
for (const localLink of localLinks) {
  const destinationElement = document.getElementById(
    `${localLink?.getAttribute('href')?.replace('#', '')}`
  )
  localLink.addEventListener('click', function (e) {
    e.preventDefault()
    if (destinationElement)
      window.scrollTo(0, destinationElement.offsetTop - header.clientHeight)
  })
}

// Handle nav link active
const navLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.nav-link')
window.addEventListener('scroll', () => {
  for (const navLink of navLinks) {
    navLink.classList.remove('active')
    const destinationElement = document.getElementById(
      `${navLink?.getAttribute('href')?.replace('#', '')}`
    )
    if (destinationElement) {
      if (
        window.scrollY >= destinationElement.offsetTop - header.clientHeight &&
        window.scrollY <=
          destinationElement.offsetTop +
            destinationElement.clientHeight -
            header.clientHeight
      ) {
        navLink.classList.add('active')
      }
    }
  }
})
