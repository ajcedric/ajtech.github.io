const contactHover = document.querySelector('.contacts-hover');
const contactBtn = document.getElementById('contact');
const closehireBtn = document.getElementById('close-btn-hire');



contactBtn.addEventListener('click', ()=>{
    contactHover.classList.add('open');
})

closehireBtn.addEventListener('click', ()=>{
    hiremeHover.classList.remove('open')
})



