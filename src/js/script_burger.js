
const body = document.querySelector('body');
let closeBtn = document.querySelector('.menu-header__burger');
let modalWin = document.querySelector(".screen-wrapper");
let openBurger = document.querySelector('.header__burger');

// const timeout = 800;

openBurger.addEventListener('click', function() {
    modalWin.style.display = 'flex';
    body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click', function() {
    modalWin.style.display = 'none';
    body.style.overflow = 'auto';
})


modalWin.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-wrapper')) { 
    modalWin.style.display = 'none'; }
    body.style.overflow = 'auto';
})

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        modalWin.style.display = 'none';
        body.style.overflow = 'auto';
    }
})


const feedback = document.querySelectorAll('.header__profile');
const chatBtn = document.querySelectorAll('.header__chat');
const closeModalFirst = document.querySelector('.menu-header__burger-modal');
const modalFirst = document.querySelector('.modal-first-wrapper');

if (feedback.length > 0) {
    for (let i = 0; i < feedback.length; i++) {
        const el = feedback[i];
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            modalWin.style.display = 'none';
            modalFirst.style.display = 'flex';
            body.style.overflow = 'hidden';
        })
    }
}

if (chatBtn.length > 0) {
    for (let i = 0; i < chatBtn.length; i++) {
        const el = chatBtn[i];
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            modalWin.style.display = 'none';
            modalFirst.style.display = 'flex';
            body.style.overflow = 'hidden';

        })
    }
}

modalFirst.addEventListener('click', function(event) {
    if (!event.target.closest('.modal-window')) { 
        modalFirst.style.display = 'none'; }
        body.style.overflow = 'auto';
})

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        modalFirst.style.display = 'none';
        body.style.overflow = 'auto';
    }
})

closeModalFirst.addEventListener('click', function() {
     modalFirst.style.display = 'none';
     body.style.overflow = 'auto'; 
})





const callBtn = document.querySelectorAll('.header__call');
const closeModalSecond = document.querySelectorAll('.menu-header__burger-modal')[1];
const modalSecond = document.querySelector('#modalSecond');

if (callBtn.length > 0) {
    for (let i = 0; i < callBtn.length; i++) {
        const el = callBtn[i];
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            modalWin.style.display = 'none';
            modalSecond.style.display = 'flex';
            body.style.overflow = 'hidden';
        })
    }
}

modalSecond.addEventListener('click', function(event) {
    if (!event.target.closest('.modal-window')) { 
        modalSecond.style.display = 'none';
        body.style.overflow = 'auto';
     }
})

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        modalSecond.style.display = 'none';
        body.style.overflow = 'auto';
    }
})

closeModalSecond.addEventListener('click', function() {
     modalSecond.style.display = 'none';
     body.style.overflow = 'auto'; 
})