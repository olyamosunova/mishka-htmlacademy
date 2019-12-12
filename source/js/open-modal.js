var modal = document.querySelector('.modal');
var btnModal = document.querySelector('.modal-close');

btnModal.addEventListener('click', function() {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('main-nav--closed');
    modal.classList.remove('modal--opened');
  }
});
