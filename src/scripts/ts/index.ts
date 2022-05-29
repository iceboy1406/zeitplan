const header = document.getElementsByTagName('header')[0]
const navToggle: HTMLDivElement | null = document.querySelector('.nav-toggle')
const navItem: HTMLDivElement | null = document.querySelector('.nav-item')
// toggle nav item visibility by clicking toggle icon
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('close')
  navItem?.classList.toggle('hide')
})

const rippleButtons: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
  'button.ripple-button'
)

const rippleButtonLinks: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll('a.ripple-button')

for (const rippleButtonLink of rippleButtonLinks) {
  rippleButtonLink.addEventListener('click', rippleButtonHandler)
}
for (const rippleButton of rippleButtons) {
  rippleButton.addEventListener('click', rippleButtonHandler)
}
function rippleButtonHandler(
  this: HTMLButtonElement | HTMLAnchorElement,
  e: MouseEvent
) {
  if (this.getElementsByClassName('ripple').length > 0) {
    setTimeout(() => {
      if (this.childNodes.length > 1) {
        this.removeChild(this.childNodes[1])
        this.removeChild(this.childNodes[1])
      }
    }, 600)
  }
  const circle = document.createElement('div')
  this.appendChild(circle)

  const d = Math.max(this.clientWidth, this.clientHeight)
  circle.style.width = circle.style.height = d + 'px'

  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px'
  circle.style.top = e.clientY - this.offsetTop - d / 2 - 10 + 'px'

  circle.classList.add('ripple')
}

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
