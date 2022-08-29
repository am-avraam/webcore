function hide(el, el2) {
    el.classList.remove('visible');
    el2.classList.remove('transformation');
}

function show(el, el2) {
    el.classList.add('visible');
    el2.classList.add('transformation');
}


const body = document.querySelector('body');
let closeBtn = document.querySelector('.menu-header__burger');
let modalWin = document.querySelector(".screen-wrapper");
let openBurger = document.querySelector('.header__burger');
let mobileMenu = document.getElementById('mobile-menu');
let mobMenuButtons = document.querySelector('.mobile-menu__buttons');


openBurger.addEventListener('click', function() {
    show(modalWin, mobileMenu);
    body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', function() {
    hide(modalWin, mobileMenu);
    body.style.overflow = 'auto';
})


modalWin.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-wrapper')) { 
        hide(modalWin, mobileMenu);
}
if (document.getElementsByClassName('modal-first-wrapper visible').length <= 0) {
        body.style.overflow = 'auto';
    }
})

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        hide(modalWin, mobileMenu);
        body.style.overflow = 'auto';
    }
})




const feedback = document.querySelectorAll('.header__profile');
const chatBtn = document.querySelectorAll('.header__chat');
const closeModalFirst = document.querySelector('.menu-header__burger-modal');
const modalFirst = document.getElementById('modalFirst');
const modalWindowFirst = document.getElementById('modal-window-first')



if (feedback.length > 0) {
    for (let i = 0; i < feedback.length; i++) {
        const el = feedback[i];
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            hide(modalWin, mobileMenu);
            show(modalFirst, modalWindowFirst);
            body.style.overflow = 'hidden';
        })
    }
}

if (chatBtn.length > 0) {
    for (let i = 0; i < chatBtn.length; i++) {
        const el = chatBtn[i];
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            hide(modalWin, mobileMenu);
            show(modalFirst, modalWindowFirst);
            body.style.overflow = 'hidden';

        })
    }
}

modalFirst.addEventListener('click', function(event) {
    if (!event.target.closest('.modal-window')) { 
        hide(modalFirst, modalWindowFirst);
    }
        body.style.overflow = 'auto';
})

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        hide(modalFirst, modalWindowFirst);
        body.style.overflow = 'auto';
    }
})

closeModalFirst.addEventListener('click', function() {
    hide(modalFirst, modalWindowFirst);
     body.style.overflow = 'auto'; 
})





const callBtn = document.querySelectorAll('.header__call');
const closeModalSecond = document.querySelectorAll('.menu-header__burger-modal')[1];
const modalSecond = document.getElementById('modalSecond');
const modalWindowSecond = document.getElementById('modal-window-second');


if (callBtn.length > 0) {
    for (let i = 0; i < callBtn.length; i++) {
        const el = callBtn[i];
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            hide(modalWin, mobileMenu);
            show(modalSecond, modalWindowSecond)
            body.style.overflow = 'hidden';
        })
    }
}

modalSecond.addEventListener('click', function(event) {
    if (!event.target.closest('.modal-window')) { 
        hide(modalSecond, modalWindowSecond)
        body.style.overflow = 'auto';
     }
})

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        hide(modalSecond, modalWindowSecond);
        body.style.overflow = 'auto';
    }
})

closeModalSecond.addEventListener('click', function() {
    hide(modalSecond, modalWindowSecond);
     body.style.overflow = 'auto'; 
})