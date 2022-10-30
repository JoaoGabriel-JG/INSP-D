// Menu Button

const sideMenu = document.getElementsByTagName("aside")
const menuBtn = document.getElementById("#menu-button")
const closeBtn = document.getElementById("#close-btn")

menuBtn.addEventListenner('click', () => {
    sidebar.style.display = 'block'
})

closeBtn.addEventListenner('click', () => {
    sidebar.style.display = 'none'
})


