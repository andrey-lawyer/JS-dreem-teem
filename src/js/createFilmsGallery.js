import Notiflix from 'notiflix';
import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import { Trending } from './trending';
import { genres } from './genres';
import { Spinner } from 'spin.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.load-more');
const filmSearch = new FilmSearch();
const trending = new Trending();
const inputEl = document.querySelector('#search__input');

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

// ====================Search Films========================
const onSearchFormSubmit = async event => {
  event.preventDefault();

  const spinner = new Spinner(opts).spin();
  galleryEl.prepend(spinner.el);

  filmSearch.query = event.currentTarget.elements.searchQuery.value;
  filmSearch.page = 1;

  try {
    const response = await filmSearch.fetchFilmsByQuery();

    if (response.data.total_results === 0) {
      event.target.elements.searchQuery.value = ' ';
      // loadMoreBtn.classList.add('is-hidden');
      galleryEl.innerHTML = '';
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query'
      );
      spinner.stop();
      return;
    }
    filmSearch.total_results = response.data.total_results;

    // if (response.data.total_results <= filmSearch.per_page) {
    //   loadMoreBtn.classList.add('is-hidden');
    // } else {
    //   loadMoreBtn.classList.remove('is-hidden');
    // }
    Notiflix.Notify.success(`Found ${response.data.total_results} films.`);

    response.data.results.forEach(movie => {
      movie.release_date = '|  ' + movie.release_date.slice(0, 4);
      movie.original_title = movie.original_title.toUpperCase();

      const newArr = [];
      movie.genre_ids.map((element, index, array) => {
        genres.forEach(genre => {
          if (genre.id == element) {
            newArr.push(genre.name);
          }
        });
      });
      if (newArr.length > 2) {
        newArr.splice(2, newArr.length - 2, 'Other');
      }
      movie.genre_ids = [...newArr];
    });

    galleryEl.innerHTML = createCards(response.data.results);
    //   !!!!!!
  } catch (error) {
    Notiflix.Notify.failure(console.log(error));
  }
  spinner.stop();
};
const onLoadMoreBtnClick = async event => {
  const spinner = new Spinner(opts).spin(); // spinner
  galleryEl.prepend(spinner.el); //spinner

  if (!filmSearch.isNextDataExist()) {
    // loadMoreBtn.classList.add('is-hidden');
    Notiflix.Notify.failure('sorry, the end of search results reached.');
    return;
  }
  filmSearch.page += 1;

  try {
    const response = await filmSearch.fetchFilmsByQuery();
    filmSearch.total_results = response.data.total_results;

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createCards(response.data.results)
    );
    //   !!!!!!
  } catch (error) {
    console.log(error);
  }
  spinner.stop();
  //   scroll
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
// loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

// ===========================trending====================
const loadTrendingMovies = async event => {
  // if (!trending.isNextDataExist()) {
  //   loadMoreBtn.classList.add('is-hidden');
  //   Notiflix.Notify.failure(
  //     "sorry, the end of search results reached."
  //   );
  //   return;
  // }

  // trending.page += 1;

  const spinner = new Spinner(opts).spin();
  galleryEl.prepend(spinner.el);

  try {
    const response = await trending.fetchTrendingFilms();
    trending.total_results = response.data.total_results;

    response.data.results.forEach(movie => {
      movie.release_date = ' | ' + movie.release_date.slice(0, 4);
      movie.original_title = movie.original_title.toUpperCase();

      const newArr = [];
      movie.genre_ids.map((element, index, array) => {
        genres.forEach(genre => {
          if (genre.id == element) {
            newArr.push(genre.name);
          }
        });
      });
      if (newArr.length > 2) {
        newArr.splice(2, newArr.length - 2, 'Other');
      }
      movie.genre_ids = [...newArr];
    });

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createCards(response.data.results)
    );
  } catch (error) {
    console.log(error);
  }
  spinner.stop();
  //   scroll
};

loadTrendingMovies();
