const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';

const dateLocalWathed = localStorage.getItem(STORAGE_KEY_WATCHED);
const dateLocalQueuee = localStorage.getItem(STORAGE_KEY_QUEUEE);
const parsedateLocalWathed = JSON.parse(dateLocalWathed);
const parsedateLocalQueuee = JSON.parse(dateLocalQueuee);

const refs = {
  buttonLibraryWatched: document.querySelector('.js-library-watch'),
  buttonLibraryQueue: document.querySelector('.js-library-queue'),

  containerLibrary: document.querySelector('.js-gallery-library'),

  imgModal: document.querySelector('.js_image_modal'),
  voteModal: document.querySelector('.vote'),
  popularModal: document.querySelector('.js-value-popular'),
  originalModal: document.querySelector('.js-value-оriginal'),
  genreModal: document.querySelector('.js-genre'),
  articleModal: document.querySelector('.about__text'),
};
refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';
console.log(parsedateLocalWathed);
const cardsWathed = parsedateLocalWathed
  .map(
    card =>
      `
  <li class='gallery__item'>
    <div class='block__image'>
      <img
        class='gallery__image'
        src='${card.img}'
        alt=''
        loading='lazy'
      />
    </div>
    <div class='info_movie'>
      <h2 class='name_movie'>${card.nameMovie}
      </h2>
      <p class='genre_movie'>${card.genre} ${card.vote}</p>     
    </div>
  </li>
  `
  )
  .join('');
console.log(cardsWathed);
console.log(refs.containerLibrary);
refs.containerLibrary.insertAdjacentHTML('beforeend', cardsWathed);
