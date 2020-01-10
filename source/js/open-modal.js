var modal = document.querySelector('.modal');
var btnModal = document.querySelector('.modal-open');

btnModal.addEventListener("click", function() {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--opened")) {
      evt.preventDefault();
      modal.classList.remove("modal--opened");
      modal.classList.add('modal--closed');
    }
  }
});

/*
btnModal = Array.prototype.slice.call(btnModal);

var closeModal = function() {
  if (modal.classList.contains('modal--opened')) {
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
  }
}

btnModal.forEach(function(elem) {
  elem.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  });
});

modal.addEventListener("click", closeModal);

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    closeModal;
  }
});
*/
