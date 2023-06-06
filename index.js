const nav = document.getElementById('nav')
const menuIcon = document.getElementById('menu-icon')
const navbarItems = document.querySelectorAll('#nav-items li a')

navbarItems.forEach(item => {
    item.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
})

console.log(navbarItems);

// TOGGLE NAV
menuIcon.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})