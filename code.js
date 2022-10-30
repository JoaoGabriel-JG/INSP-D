// Menu Button

const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListenner('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListenner('click', () => {
    sideMenu.style.display = 'none'
})


