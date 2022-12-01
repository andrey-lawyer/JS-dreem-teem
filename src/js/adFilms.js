// localStorage.clear();
const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';

const refs = {
  buttonWathed: document.querySelector('.js-Wathed'),
  buttonQueue: document.querySelector('.js-Queuee'),

  imgModal: document.querySelector('.js_image_modal'),
  voteModal: document.querySelector('.vote'),
  popularModal: document.querySelector('.js-value-popular'),
  originalModal: document.querySelector('.js-value-оriginal'),
  genreModal: document.querySelector('.js-genre'),
  articleModal: document.querySelector('.about__text'),
};

let arrayWathed = [];
let arrayQueue = [];

refs.buttonWathed.addEventListener('click', onclickWathed);
// refs.buttonQueue.addEventListener('click', onclickQueue);

function onclickWathed() {
  //   const saved = localStorage.getItem(STORAGE_KEY_WATCHED);
  //   const parsSaved = JSON.parse(saved);
  const img = refs.imgModal.src;
  const vote = refs.voteModal.textContent;
  const popular = refs.popularModal.textContent;
  const original = refs.originalModal.textContent;
  const genre = refs.genreModal.textContent;
  const article = refs.articleModal.textContent;

  const objectNew = {
    img: { img },
    vote: { vote },
    popular: { popular },
    original: { original },
    genre: { genre },
    article: { article },
  };
  arrayWathed.push(objectNew);
  console.log(arrayWathed);
  console.log(refs.imgModal.src);
  localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(arrayWathed));
  //   localStorage.removeItem(STORAGE_KEY);
  // 1
}
