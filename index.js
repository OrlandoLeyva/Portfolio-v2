const nav = document.getElementById('nav')
const menuIcon = document.getElementById('menu-icon')

// TOGGLE NAV
menuIcon.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})