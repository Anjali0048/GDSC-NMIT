let bar = document.getElementById('bar');
let nav = document.getElementsByClassName('right-list');
let close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

