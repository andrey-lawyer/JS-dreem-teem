import Notiflix from 'notiflix';
// import axios from 'axios';

import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import { Trending } from './trending';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const filmSearch = new FilmSearch();
const trending = new Trending();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  filmSearch.query = event.currentTarget.elements.searchQuery.value;
  filmSearch.page = 1;

  try {
    const response = await filmSearch.fetchFilmsByQuery();

    if (response.data.total_results === 0) {
      event.target.elements.searchQuery.value = ' ';
      loadMoreBtn.classList.add('is-hidden');
      galleryEl.innerHTML = '';
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );

      return;
    }
    filmSearch.total_results = response.data.total_results;

    if (response.data.total_results <= filmSearch.per_page) {
      loadMoreBtn.classList.add('is-hidden');
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }
    Notiflix.Notify.success(
      `Hooray! We found ${response.data.total_results} films.`
    );
    galleryEl.innerHTML = createCards(response.data.results);
    //   !!!!!!
  } catch (error) {
    Notiflix.Notify.failure(console.log(error));
  }
};
const onLoadMoreBtnClick = async event => {
  if (!filmSearch.isNextDataExist()) {
    loadMoreBtn.classList.add('is-hidden');
    Notiflix.Notify.failure(
      "Were sorry, but you've reached the end of search results."
    );
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

  //   плавне прокручування
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

// searchFormEl.addEventListener('submit', onSearchFormSubmit);
// loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

// ===========================trending====================
const loadTrendingMovies = async event => {
  // if (!trending.isNextDataExist()) {
  //   loadMoreBtn.classList.add('is-hidden');
  //   Notiflix.Notify.failure(
  //     "Were sorry, but you've reached the end of search results."
  //   );
  //   return;
  // }
  filmSearch.page += 1;

  try {
    const response = await trending.fetchTrendingFilms();
    trending.total_results = response.data.total_results;

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createCards(response.data.results)
    );
    //   !!!!!!
  } catch (error) {
    console.log(error);
  }
};

loadTrendingMovies();
