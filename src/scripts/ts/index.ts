import toggleNavbarHandler from "./scrollToDestinationHandler.js"
import activeNavLinkHandler from "./activeNavLinkHandler.js"
import scrollToDestinationHandler from "./scrollToDestinationHandler.js"
import animateOnScroll from "./animateOnScroll.js" 
toggleNavbarHandler()
activeNavLinkHandler()
scrollToDestinationHandler()
window.addEventListener('DOMContentLoaded', () => animateOnScroll())
window.addEventListener('scroll', () => animateOnScroll())
window.addEventListener('resize', () => animateOnScroll())
export {}