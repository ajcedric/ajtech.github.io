
const mobileBtn = document.getElementById('toggle')
nav = document.querySelector('nav')
mobilebtnexit = document.getElementById('mobilebtnexit');
mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})
mobilebtnexit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})