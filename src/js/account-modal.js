const refs = {
  closeModalBtn: document.querySelector('.modal__btn-close'),
  modal: document.querySelector('.modal__container'),
  body: document.body,
  backdropEl: document.querySelector('#modal-account'),
  loginBtn: document.querySelector('.account'),
//   loginForm: document.querySelector('#login-form'),
};

refs.loginBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', modalClose);
// refs.loginForm.addEventListener('submit', modalClose);

function toggleModal(event) {
  refs.backdropEl.classList.remove('is-hidden');
  refs.body.classList.add('overflow-hidden');
  document.addEventListener('keydown', onEscDown);
  document.addEventListener('click', closeOnBackdropClick);
}

function modalClose(event) {
  refs.backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscDown);
  refs.body.classList.remove('overflow-hidden');
  removeEventListener('click', closeOnBackdropClick);
}

document.addEventListener('keydown', onEscDown);
function onEscDown(event) {
  if (event.code === 'Escape') {
    modalClose();
  }
}

function closeOnBackdropClick(event) {
  if (event.target === refs.backdropEl) {
    modalClose();
  }
}
