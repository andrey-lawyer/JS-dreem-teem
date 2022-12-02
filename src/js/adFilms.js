// localStorage.clear();
const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';

const refs = {
  buttonWathedModal: document.querySelector('.js-Wathed'),
  buttonQueueModal: document.querySelector('.js-Queuee'),

  nameFilmModal: document.querySelector('.movie__name'),
  imgModal: document.querySelector('.js_image_modal'),
  voteModal: document.querySelector('.vote'),
  popularModal: document.querySelector('.js-value-popular'),
  originalModal: document.querySelector('.js-value-оriginal'),
  genreModal: document.querySelector('.js-genre'),
  articleModal: document.querySelector('.about__text'),
};

let arrayWathed = [];
let arrayQueue = [];

refs.buttonWathedModal.addEventListener('click', onclickWathed);
refs.buttonQueueModal.addEventListener('click', onclickQueue);

function onclickWathed() {
  refs.buttonWathedModal.disabled = true;
  refs.buttonQueueModal.disabled = true;
  //   const saved = localStorage.getItem(STORAGE_KEY_WATCHED);
  //   const parsSaved = JSON.parse(saved);
  const nameMovie = refs.nameFilmModal.textContent;
  const img = refs.imgModal.src;
  const vote = refs.voteModal.textContent;
  const popular = refs.popularModal.textContent;
  const original = refs.originalModal.textContent;
  const genre = refs.genreModal.textContent;
  const article = refs.articleModal.textContent;
  const objectNew = {
    nameMovie,
    img,
    vote,
    popular,
    original,
    genre,
    article,
  };
  arrayWathed.push(objectNew);
  // console.log(arrayWathed);
  // console.log(refs.imgModal.src);
  localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(arrayWathed));
  console.log(localStorage);
  // localStorage.clear();
  const dateLocal = localStorage.getItem(STORAGE_KEY_WATCHED);
  console.log(JSON.parse(dateLocal));
}

function onclickQueue() {
  const nameMovie = refs.nameFilmModal.textContent;
  const img = refs.imgModal.src;
  const vote = refs.voteModal.textContent;
  const popular = refs.popularModal.textContent;
  const original = refs.originalModal.textContent;
  const genre = refs.genreModal.textContent;
  const article = refs.articleModal.textContent;
  const objectNew = {
    nameMovie,
    img,
    vote,
    popular,
    original,
    genre,
    article,
  };
  arrayQueue.push(objectNew);
  console.log(arrayQueue);
  localStorage.setItem(STORAGE_KEY_QUEUEE, JSON.stringify(arrayQueue));
  console.log(localStorage);
  // localStorage.clear();
}
