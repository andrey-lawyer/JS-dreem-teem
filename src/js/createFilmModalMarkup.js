import Notiflix from 'notiflix';
import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import createMovieInfoModal from '../templates/modal.hbs';
import { Trending } from './trending';
import { genres } from './genres';
import { Spinner } from 'spin.js';
import { GetFullMovieInfo } from './getFullMovieInfo';
import { toCardModalLibrary } from './showFilmsLibrary';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery-library');
const movieInfoModalEl = document.querySelector('.js-movie-info');
const jsContainer = document.querySelector('.js-container-movie');
// const loadMoreBtn = document.querySelector('.load-more');
const filmSearch = new FilmSearch();
const trending = new Trending();
const getFullMovieInfo = new GetFullMovieInfo();
const inputEl = document.querySelector('#search__input');
// const inputEl = document.querySelector('#search__input');
//

// uuuuuuuuuuu
const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';
// let dateLocalWatch;
// let dateLocalQueue;
let dateLocalWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
let dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));
let dateFilm;

// uuuuuuuuuuuuuuuu
//
// =====================Spinner============================
const opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 1, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ff6b01', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'fixed', // Element positioning
};

const onFilmCardClick = async event => {
  // event.preventDefault();

  const spinner = new Spinner(opts).spin();
  galleryEl.prepend(spinner.el);

  if (event.target.nodeName === 'UL') {
    console.log('miss');
    return;
  }
  getFullMovieInfo.id = event.target.closest('li').dataset.id;

  // console.log(getFullMovieInfo.id);

  try {
    const response = await getFullMovieInfo.fetchFilmsByID();

    if (response.data.title) {
      response.data.title = response.data.title.toUpperCase();
    }

    if (response.data.original_title) {
      response.data.original_title = response.data.original_title.toUpperCase();
    }

    if (!response.data.poster_path) {
      response.data.poster_path = '/vkcajIqORuKfd8uV2GYULlHut9o.jpg';
    }

    const newArr = [];
    response.data.genres.map(element => {
      newArr.push(element.name);
    });
    response.data.genres = [...newArr];

    jsContainer.innerHTML = createMovieInfoModal(response.data);

    dateFilm = response.data;
    //Меняет название кнопок в модальном окне!!!!!!!!!!!!!!!
    toModalLocalStorage();
    //Меняет название кнопок в модальном окне!!!!!!!!!!!!!!!
  } catch (error) {
    Notiflix.Notify.failure(console.log(error));
  }

  spinner.stop();
};
galleryEl.addEventListener('click', onFilmCardClick);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Add local storage!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function toModalLocalStorage() {
  setTimeout(() => {
    const buttonWathedModal = document.querySelector('.js-Wathed');
    const buttonQueueModal = document.querySelector('.js-Queuee');
    const choiceLocalStorage = dateLocalWatch.find(el => el.id === dateFilm.id);
    if (!choiceLocalStorage) {
      buttonWathedModal.textContent = 'REMOVED FROM QUEUE';
      // buttonQueueModal.textContent = 'ADD TO WATCHED';
      buttonQueueModal.textContent = 'ADD TO WATCHED/QUEUE';
    } else {
      buttonWathedModal.textContent = 'REMOVED FROM WATCHED';
      // buttonQueueModal.textContent = 'ADD TO QUEUE';
      buttonQueueModal.textContent = 'ADD TO WATCHED/QUEUE';
    }
    // console.log(dateFilm.id);
    // console.log(dateLocalWatch);
  }, 0);
}

// localStorage.clear();

//  ===============SASHA ===============================   //

const modal = document.querySelector('.modal__container');

modal.addEventListener('click', event => {
  setTimeout(() => {
    // const buttonWathedModal = document.querySelector('.js-Wathed');
    // const buttonQueueModal = document.querySelector('.js-Queuee');
    //  удаление фильмов
    if (event.target.classList.contains('js-Wathed')) {
      let dateLocalWatch = JSON.parse(
        localStorage.getItem(STORAGE_KEY_WATCHED)
      );
      let dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));
      const findEl = dateLocalWatch.find(el => el.id === dateFilm.id);
      // console.log(findEl);
      if (!findEl) {
        const newLocalQueue = dateLocalQueue.filter(el => el.id != dateFilm.id);
        // console.log(newLocalQueue);
        localStorage.setItem(STORAGE_KEY_QUEUEE, JSON.stringify(newLocalQueue));
        toCardModalLibrary();
      } else {
        const newLocalWatch = dateLocalWatch.filter(el => el.id != dateFilm.id);
        // console.log(newLocalWatch);
        localStorage.setItem(
          STORAGE_KEY_WATCHED,
          JSON.stringify(newLocalWatch)
        );
        toCardModalLibrary();
      }
    }
    //  удаление фильмов
    // перенос фильмов
    if (event.target.classList.contains('js-Queuee')) {
      console.log('jkjkkjkj');
      let dateLocalWatch = JSON.parse(
        localStorage.getItem(STORAGE_KEY_WATCHED)
      );
      let dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));
      const findElWatch = dateLocalWatch.find(el => el.id === dateFilm.id);
      const findElQueue = dateLocalQueue.find(el => el.id === dateFilm.id);
      console.log(findElWatch);
      if (!findElWatch) {
        const newLocalQueue = dateLocalQueue.filter(el => el.id != dateFilm.id);
        // console.log(newLocalQueue);
        localStorage.setItem(STORAGE_KEY_QUEUEE, JSON.stringify(newLocalQueue));
        dateLocalWatch.push(findElQueue);
        localStorage.setItem(
          STORAGE_KEY_WATCHED,
          JSON.stringify(dateLocalWatch)
        );
        // buttonQueueModal.textContent = 'ADD TO WATCHED';
        toCardModalLibrary();
      } else {
        const newLocalWatch = dateLocalWatch.filter(el => el.id != dateFilm.id);
        // console.log(newLocalWatch);
        localStorage.setItem(
          STORAGE_KEY_WATCHED,
          JSON.stringify(newLocalWatch)
        );
        dateLocalQueue.push(findElWatch);
        localStorage.setItem(
          STORAGE_KEY_QUEUEE,
          JSON.stringify(dateLocalQueue)
        );
        // buttonQueueModal.textContent = 'ADD TO QUEUE';
        toCardModalLibrary();
      }
      // перенос фильмов
    }
  }, 0);
});

// =========Sasha ========
