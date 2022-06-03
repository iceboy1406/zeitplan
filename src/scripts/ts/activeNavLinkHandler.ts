const activeNavLinkHandler = () => {
  const header = document.getElementsByTagName('header')[0]
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
          window.scrollY >=
            destinationElement.offsetTop - header.clientHeight &&
          window.scrollY <
            destinationElement.offsetTop +
              destinationElement.clientHeight -
              header.clientHeight -
              1
        ) {
          navLink.classList.add('active')
        }
      }
    }
  })
}
export default activeNavLinkHandler
