  function showMore() {
    let firstPar = document.getElementById("firstPar");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("btnToMore");
  
    if (firstPar.style.display === "none") {
      firstPar.style.display = "inline";
      btnText.innerHTML = "Читать далее";
      moreText.style.display = "none";
    } else {
      firstPar.style.display = "none";
      btnText.innerHTML = "Скрыть подробности";
      moreText.style.display = "block";

    }
  }


//   let popup = document.querySelector('.card:nth-child(n+8)');
// let openPopupButton = document.querySelector('.button-show');
// let closePopupButton = popup.querySelector('.button-hide');

// openPopupButton.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.add('modal--show');
// });

// closePopupButton.addEventListener('click', function () {
//   popup.classList.remove('modal--show');
// });