import createCards from '../templates/filmcardLibrary.hbs';
import Notiflix from 'notiflix';

const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';

const dateLocalWathed = localStorage.getItem(STORAGE_KEY_WATCHED);
const dateLocalQueuee = localStorage.getItem(STORAGE_KEY_QUEUEE);
const parsedateLocalWathed = JSON.parse(dateLocalWathed);
const parsedateLocalQueuee = JSON.parse(dateLocalQueuee);
console.log(parsedateLocalQueuee);

const refs = {
  buttonLibraryWatched: document.querySelector('.js-library-watch'),
  buttonLibraryQueue: document.querySelector('.js-library-queue'),

  containerLibrary: document.querySelector('.js-gallery-library'),

  buttonLoadMore: document.querySelector('.load-more'),
};

refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';
// console.log(refs.containerLibrary);
// LOAD-MORE!!!!
refs.buttonLoadMore.style.display = 'none';

if (parsedateLocalWathed.length <= 6) {
  refs.containerLibrary.innerHTML = createCards(parsedateLocalWathed);
} else {
  refs.containerLibrary.innerHTML = createCards(
    parsedateLocalWathed.slice(0, 6)
  );
  refs.buttonLoadMore.style.display = 'block';
}

let counterBegin = 0;
let counterEnd = 0;
function onClickLoadMore() {
  counterBegin += 6;
  counterEnd += 12;
  if (parsedateLocalWathed.length <= counterBegin) {
    refs.buttonLoadMore.style.display = 'none';
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query'
    );
  } else {
    refs.containerLibrary.insertAdjacentHTML(
      'beforeend',
      createCards(parsedateLocalWathed.slice(counterBegin, counterEnd))
    );
  }
}

refs.buttonLoadMore.addEventListener('click', onClickLoadMore);

// LOAD-MORE!!!!

const onShowQueue = () => {
  refs.containerLibrary.innerHTML = createCards(parsedateLocalQueuee);
  refs.buttonLibraryWatched.style.backgroundColor = 'transparent';
  refs.buttonLibraryQueue.style.backgroundColor = '#ff6b01';
};
refs.buttonLibraryQueue.addEventListener('click', onShowQueue);

const onShowWatched = () => {
  refs.containerLibrary.innerHTML = createCards(parsedateLocalWathed);
  refs.buttonLibraryQueue.style.backgroundColor = 'transparent';
  refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';
};
refs.buttonLibraryWatched.addEventListener('click', onShowWatched);
