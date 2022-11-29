import Notiflix from 'notiflix';
import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import { Trending } from './trending';
import { genres } from './genres';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.load-more');
const filmSearch = new FilmSearch();
const trending = new Trending();

// ====================Search Films========================
const onSearchFormSubmit = async event => {
  event.preventDefault();

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
};
const onLoadMoreBtnClick = async event => {
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
  //     "Were sorry, but you've reached the end of search results."
  //   );
  //   return;
  // }

  // trending.page += 1;

  try {
    const response = await trending.fetchTrendingFilms();
    trending.total_results = response.data.total_results;

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

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createCards(response.data.results)
    );
  } catch (error) {
    console.log(error);
  }
};

loadTrendingMovies();
