const refs = {
  closeModalBtn: document.querySelector('.modal__btn-close'),
  modal: document.querySelector('.modal__container'),
  body: document.body,
  galleryEl: document.querySelector('.gallery'),
  backdropEl: document.querySelector('.modal__backdrop'),
};

refs.galleryEl.addEventListener('click', toggleModal);

refs.closeModalBtn.addEventListener('click', modalClose);

function toggleModal(event) {
  const item = event.target.closest('.gallery__item');
  if (!item) {
    return;
  }
  refs.backdropEl.classList.remove('is-hidden');
  refs.body.classList.add('overflow-hidden');
  document.addEventListener('keydown', onEscDown);
}

function modalClose(event) {
  refs.backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscDown);
  refs.body.classList.remove('overflow-hidden');
}

document.addEventListener('keydown', onEscDown);
function onEscDown(event) {
  if (event.code === 'Escape') {
    modalClose();
    console.log(event.code);
  }
}
