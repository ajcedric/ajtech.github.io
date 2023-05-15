let openBtnweb = document.getElementById('open-btn-web');
let modalOpenweb = document.getElementById('modal-container-web');
let closeBtnweb = document.getElementById('close-btn-web');
 
let openBtnmulti = document.getElementById('open-btn-multi');
let modalOpenmulti = document.getElementById('modal-container-multi');
let closeBtnmulti = document.getElementById('close-btn-multi');
 

let openBtntech = document.getElementById('open-btn-tech');
let modalOpentech = document.getElementById('modal-container-tech');
let closeBtntech = document.getElementById('close-btn-tech');
 


openBtnweb.addEventListener('click', function(){
  
    modalOpenweb.style.display='block'; 
});

closeBtnweb.addEventListener('click', function(){
  
    modalOpenweb.style.display='none'; 
});

window.addEventListener('click', function(e){
    if (e.target === modalOpen) {
        modalOpenweb.style.display ='none';
    }
})
window.addEventListener('click', function(e){

    if(e.target === modalOpen){
        modalOpenweb.style.display='none'; 
    }
});

openBtnmulti.addEventListener('click', function(){
  
    modalOpenmulti.style.display='block'; 
});

closeBtnmulti.addEventListener('click', function(){
  
    modalOpenmulti.style.display='none'; 
});

window.addEventListener('click', function(e){
    if (e.target === modalOpen) {
        modalOpenmulti.style.display ='none';
    }
})
window.addEventListener('click', function(e){

    if(e.target === modalOpen){
        modalOpenmulti.style.display='none'; 
    }
});



openBtntech.addEventListener('click', function(){
  
    modalOpentech.style.display='block'; 
});

closeBtntech.addEventListener('click', function(){
  
    modalOpentech.style.display='none'; 
});

window.addEventListener('click', function(e){
    if (e.target === modalOpen) {
        modalOpentech.style.display ='none';
    }
})
window.addEventListener('click', function(e){

    if(e.target === modalOpen){
        modalOpentech.style.display='none'; 
    }
});
