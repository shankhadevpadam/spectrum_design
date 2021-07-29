

const close = document.querySelector('#close');
const dismiss = document.querySelector('#head');
close.addEventListener('click', () => {
    dismiss.classList.add('hidden');
});

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden')
    }
});