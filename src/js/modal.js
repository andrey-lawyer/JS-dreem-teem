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
  document.addEventListener('click', closeOnBackdropClick);
}
// правки Андрей
// const buttonWathedModal = document.querySelector('.js-Wathed');
// const buttonQueueModal = document.querySelector('.js-Queuee');
// правки Андрей

function modalClose(event) {
  refs.backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscDown);
  refs.body.classList.remove('overflow-hidden');
  removeEventListener('click', closeOnBackdropClick);
  // правки Андрей
  // buttonWathedModal.disabled = false;
  // buttonQueueModal.disabled = false;
  // правки Андрей
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

// Sasha
refs.modal.addEventListener('click', closeOnClick);
function closeOnClick(event) {
  if (event.target.nodeName === 'path' || event.target.nodeName === 'svg') {
    modalClose();
  }
}
