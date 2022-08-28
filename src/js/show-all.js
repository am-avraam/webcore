// ДЛЯ ТЕКСТА О КОМПАНИИ

let btnIntro = document.querySelector('.button-show-0');
let secondPar = document.querySelector('.intro__secondPar');
let introIconExtand = document.querySelector('.button-show-extend-0');
let btnIntroSign = document.querySelector('.button-show-sign');
let hiddenSection = document.querySelector('.intro__hiddenSection');


btnIntro.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    if (secondPar.style.display === 'block' ) {
      btnIntroSign.innerHTML = 'Читать далее';
      introIconExtand.style.transform = 'rotate(360deg)';
      secondPar.style.display = 'none';
    } else {
      btnIntroSign.innerHTML = 'Скрыть';
      introIconExtand.style.transform = 'rotate(180deg)';
      secondPar.style.display = 'block';
    }
  } else if (window.innerWidth < 1120) {
    if (hiddenSection.style.display === 'inline' ) {
      btnIntroSign.innerHTML = 'Читать далее';
      introIconExtand.style.transform = 'rotate(360deg)';
      hiddenSection.style.display = 'none';
    } else {
      btnIntroSign.innerHTML = 'Скрыть';
      introIconExtand.style.transform = 'rotate(180deg)';
      hiddenSection.style.display = 'inline';
    }
  } 
  

})


// ДЛЯ ПЕРВОГО СЛАЙДЕРА


let hids = document.querySelectorAll('.card:nth-child(n+7)');
// console.log(hids);

let btn = document.querySelector('.button-show');
let btnSign = document.querySelector('.slider-container .button-show-sign');
let showStatus = document.getElementsByClassName('showIt');
let iconExtand = document.querySelector('.button-show-extend');


btn.addEventListener('click', function() {
    if (showStatus.length > 1) {
          // ниже для актива
  btnSign.innerHTML = 'Показать все';
  btn.style.marginTop = '8px';
  iconExtand.style.transform = 'rotate(360deg)';

  for (let i = 0; i < hids.length; i++) {
  let element = hids[i]; 
  console.log(element);
    element.classList.remove('showIt');
  }
    } else {  

      // ниже для неактива
    btnSign.innerHTML = 'Скрыть';
    btn.style.marginTop = '28px';
    btn.style.marginBottom = '34px';
    iconExtand.style.transform = 'rotate(180deg)';
    
    for (let i = 0; i < hids.length; i++) {
    let element = hids[i]; 
    element.classList.add('showIt');
  }
}

})


        // НИЖЕ ДЛЯ ВТОРОГО СЛАЙДЕРА


let hids2 = document.querySelectorAll('.card-2:nth-child(n+4)');

let btn2 = document.querySelector('.button-show-2');
let btnSign2 = document.querySelector('.button-show-sign-2');
let showStatus2 = document.getElementsByClassName('showIt2');
let iconExtand2 = document.querySelector('.button-show-extend-2');


btn2.addEventListener('click', function() {
    if (showStatus2.length > 1) {
          // ниже для актива
  btnSign2.innerHTML = 'Показать все';
  btn2.style.marginTop = '8px';
  iconExtand2.style.transform = 'rotate(360deg)';

  for (let i = 0; i < hids2.length; i++) {
  let element = hids2[i]; 
  console.log(element);
    element.classList.remove('showIt2');
  }
    } else {  

      // ниже для неактива
    btnSign2.innerHTML = 'Скрыть';
    btn2.style.marginTop = '28px';
    btn2.style.marginBottom = '34px';
    iconExtand2.style.transform = 'rotate(180deg)';
    
    for (let i = 0; i < hids2.length; i++) {
    let element = hids2[i]; 
    element.classList.add('showIt2');
  }
}
})
