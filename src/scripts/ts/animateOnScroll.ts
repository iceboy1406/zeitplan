const animateOnScroll = () => {
  const header = document.getElementsByTagName('header')[0]
  const animateElements: NodeListOf<HTMLElement> =
    document.querySelectorAll('[data-animate]')
  for (const animateElement of animateElements) {
    if (
      window.scrollY + document.documentElement.clientHeight >
      animateElement.offsetTop + header.clientHeight
    ) {
      animateElement.classList.add('animate')
    }
    if (
      window.scrollY + document.documentElement.clientHeight <
      animateElement.offsetTop + Math.min(125, animateElement.clientHeight / 3)
    ) {
      animateElement.classList.remove('animate')
    }
  }
}
export default animateOnScroll
