// Menu Button

const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-button")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListenner('click', () => {
    sidebar.style.display = 'block'
})

closeBtn.addEventListenner('click', () => {
    sidebar.style.display = 'none'
})


