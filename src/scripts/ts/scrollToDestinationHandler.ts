const scrollToDestinationHandler = () => {
  const header = document.getElementsByTagName('header')[0]
  const localLinks: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll('.local-link')
  for (const localLink of localLinks) {
    const destinationElement = document.getElementById(
      `${localLink?.getAttribute('href')?.replace('#', '')}`
    )
    localLink.addEventListener('click', function (e) {
      e.preventDefault()
      if (destinationElement) {
        window.scrollTo(0, destinationElement.offsetTop - header.clientHeight)
        console.log(destinationElement.offsetTop - header.clientHeight)
      }
    })
  }
}
export default scrollToDestinationHandler
