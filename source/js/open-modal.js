var modal = document.querySelector('.modal');
var open = document.querySelectorAll('.modal-open');

for (i = 0; i < open.length; ++i) {
  open[i].addEventListener("click", function() {
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
    }
  });
}

window.onclick = function(evt) {
  if (evt.target == modal) {
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--opened")) {
      evt.preventDefault();
      modal.classList.remove("modal--opened");
      modal.classList.add('modal--closed');
    }
  }
});
