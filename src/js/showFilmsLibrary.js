import createCards from '../templates/filmcardLibrary.hbs';

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
};
refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';
console.log(refs.containerLibrary);

refs.containerLibrary.innerHTML = createCards(parsedateLocalWathed);
// refs.containerLibrary.insertAdjacentHTML('beforeend',  createCards(parsedateLocalWathed));

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
