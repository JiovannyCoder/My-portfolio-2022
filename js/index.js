const navBar = document.getElementById('myNavBar')
const toTopButton = document.getElementsByClassName('to-top')[0]
let lastScrollYPosition = 0
let ticking = false

function modifyNavBarBg(windowScrollY) {
    if(windowScrollY > 100) {
        navBar.classList.add('bg-transparent','navbar-light')
        navBar.classList.remove('navbar-dark')
        toTopButton.classList.add('showIt')
    } else {
        navBar.classList.remove('bg-transparent','navbar-light')
        navBar.classList.add('navbar-dark')
        toTopButton.classList.remove('showIt')
    }
}

window.addEventListener('scroll', (e) => {
    lastScrollYPosition = window.scrollY

    if(!ticking) {
        window.requestAnimationFrame(()=>{
            modifyNavBarBg(lastScrollYPosition)
            ticking = false;
        })
    }

    ticking = true
})


