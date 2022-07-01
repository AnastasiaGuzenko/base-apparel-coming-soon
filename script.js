let button = document.querySelector('.input-block__btn')
let input = document.querySelector('.input-block__input')
let erorIcon = document.querySelector('.input-block__eror-icon');
let inputBlock = document.querySelector('.input-block');
let erorText = document.querySelector('.eror-text');
let successfullyText = document.querySelector('.successfully-text');

button.addEventListener('click', function() {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let checkEmail = re.test(String(input.value).toLowerCase());

  if (checkEmail == true) {
    erorIcon.style.display = "none";
    inputBlock.style.border = " solid 1px hsl(0, 36%, 70%)";
    erorText.style.display = "none";
    successfullyText.style.display = "block";
    input.value = '';
  } else {
    erorIcon.style.display = "block";
    inputBlock.style.border = "solid 2px #F96464";
    erorText.style.display = "block";
    successfullyText.style.display = "none";
  }
});




