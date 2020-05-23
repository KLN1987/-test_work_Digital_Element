var footerButton = document.querySelector('.footer__button');
var modalClose = document.querySelector('.modal__close');
var modal = document.querySelector('.modal');
var modalInput = document.querySelectorAll('.modal__input');
var form = document.querySelector('.modal__form');
var successfullySent = document.querySelector('.successfully-sent'); 
var successfullyClosed = document.querySelector('.successfully-sent__closed'); 
var URL = ''; //адрес url куда уходят данные

//открытие закртые модального окна
footerButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
  for (var i = 0; i < modalInput.length; i++) {
    modalInput[i].value = "";
  }
});

successfullyClosed.addEventListener('click', function() {
  successfullySent.style.display = 'none';
});

//функция загрузки данных на сервер
var upload = function(data, onSuccess) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.addEventListener('load', function () {
    onSuccess(xhr.response);
  });
  
  xhr.open('POST', URL);
  xhr.send(data);
};

// закрытие модального окна как только данные отправятся успешно
form.addEventListener('submit', function (evt) {
  upload(new FormData(form), function (response) {
    modal.style.display = "none";
    successfullySent.style.display = 'block';
  evt.preventDefault();
  });
});