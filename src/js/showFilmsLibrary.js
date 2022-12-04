import createCards from '../templates/filmcardLibrary.hbs';
import Notiflix from 'notiflix';

const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';

const dateLocalWathed = localStorage.getItem(STORAGE_KEY_WATCHED);
const dateLocalQueuee = localStorage.getItem(STORAGE_KEY_QUEUEE);
const parsedateLocalWathed = JSON.parse(dateLocalWathed);
const parsedateLocalQueuee = JSON.parse(dateLocalQueuee);
console.log('card info: ', parsedateLocalQueuee);

const refs = {
  buttonLibraryWatched: document.querySelector('.js-library-watch'),
  buttonLibraryQueue: document.querySelector('.js-library-queue'),

  containerLibrary: document.querySelector('.js-gallery-library'),

  buttonLoadMoreWatched: document.querySelector('.watched'),
  buttonLoadMoreQueue: document.querySelector('.queue'),
};

refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';

// LOAD-MORE!!!!!!!!!!!!!!!!!!!!!!

refs.buttonLoadMoreWatched.style.display = 'none';
refs.buttonLoadMoreQueue.style.display = 'none';

let counterBegin = 0;
let counterEnd = 0;
function CardsLoadmore(date, button) {
  counterBegin = 0;
  counterEnd = 0;
  if (date.length <= 6) {
    refs.containerLibrary.innerHTML = createCards(date);
  } else {
    refs.containerLibrary.innerHTML = createCards(date.slice(0, 6));
    button.style.display = 'block';
  }
}
CardsLoadmore(parsedateLocalWathed, refs.buttonLoadMoreWatched);

function onClickLoadMore(date, buttons) {
  counterBegin += 6;
  counterEnd += 12;
  if (date.length <= counterBegin) {
    buttons.style.display = 'none';
    // refs.buttonLoadMore.removeEventListener('click', onClickLoadMore);
    Notiflix.Notify.failure('Sorry, no more movies here');
  } else {
    refs.containerLibrary.insertAdjacentHTML(
      'beforeend',
      createCards(date.slice(counterBegin, counterEnd))
    );
  }
}
//
refs.buttonLoadMoreWatched.addEventListener('click', () =>
  onClickLoadMore(parsedateLocalWathed, refs.buttonLoadMoreWatched)
);

refs.buttonLoadMoreQueue.addEventListener('click', () =>
  onClickLoadMore(parsedateLocalQueuee, refs.buttonLoadMoreQueue)
);

// LOAD-MORE!!!!!!!!!!!!!!!!!!!
const onShowQueue = () => {
  refs.buttonLoadMoreWatched.style.display = 'none';
  // refs.containerLibrary.innerHTML = createCards(parsedateLocalQueuee);
  CardsLoadmore(parsedateLocalQueuee, refs.buttonLoadMoreQueue);
  refs.buttonLibraryWatched.style.backgroundColor = 'transparent';
  refs.buttonLibraryQueue.style.backgroundColor = '#ff6b01';
};

refs.buttonLibraryQueue.addEventListener('click', onShowQueue);

const onShowWatched = () => {
  refs.buttonLoadMoreQueue.style.display = 'none';
  CardsLoadmore(parsedateLocalWathed, refs.buttonLoadMoreWatched);
  refs.buttonLibraryQueue.style.backgroundColor = 'transparent';
  refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';
};
refs.buttonLibraryWatched.addEventListener('click', onShowWatched);
