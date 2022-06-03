const toggleNavbarHandler = () => {
  const navToggle: HTMLDivElement | null = document.querySelector('.nav-toggle')
  const navItem: HTMLDivElement | null = document.querySelector('.nav-item')
  // toggle nav item visibility by clicking toggle icon
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('close')
    navItem?.classList.toggle('hide')
  })
}
export default toggleNavbarHandler
