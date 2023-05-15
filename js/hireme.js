const hiremeHover = document.querySelector('.hireme-hover');
const hiremeBtn = document.getElementById('hireme');
const closehireBtn = document.getElementById('close-btn-hire');



hiremeBtn.addEventListener('click', ()=>{
    hiremeHover.classList.add('open');
})

closehireBtn.addEventListener('click', ()=>{
    hiremeHover.classList.remove('open')
})



