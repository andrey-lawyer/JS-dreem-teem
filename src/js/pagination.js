import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import Notiflix from 'notiflix';
import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import { Trending } from './trending';
import { genres } from './genres';
import { Spinner } from 'spin.js';
import { onSearchFormSubmit } from './createFilmsGallery';
import { loadTrendingMovies } from './createFilmsGallery'

import createCards from '../templates/filmcard.hbs';

const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search__input');
const trending = new Trending();

const filmSearch = new FilmSearch();

// const response = filmSearch.fetchFilmsByQuery();

const container = document.getElementById('pagination');
const options = {
  // below default value of options
  totalItems: 10000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'pagination-first-child',
  lastItemClassName: 'pagination-last-child',
  template: {
    page: '<a href="#" class="pagination-button">{{page}}</a>',
    currentPage:
      '<strong class="pagination-current-button current-page-pag pagination">{{page}}</strong>',
    moveButton:
      '<a href="#" id="next" class="pagination-button tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span id="back" class="pagination-button tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#"  id="more" class="pagination-button tui-{{type}}-is-ellip ">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

pagination.on('afterMove', eventData => {

if (searchInput.value === '') {
  trending.page = eventData.page;
  trending.fetchTrendingFilms().then(response => {
    response.data.results.forEach(movie => {
      if (movie.release_date) {
        movie.release_date = ' |  ' + movie.release_date.slice(0, 4);
      }
      if (movie.title) {
        movie.title = movie.title.toUpperCase();
      }
      if (!movie.poster_path) {
        movie.poster_path = '/vkcajIqORuKfd8uV2GYULlHut9o.jpg';
      }

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
    gallery.innerHTML = createCards(response.data.results)
    return
  })

}
  filmSearch.page = eventData.page;
  filmSearch.query = searchInput.value;
  filmSearch.fetchFilmsByQuery().then(response => { 

    response.data.results.forEach(movie => {
      if (movie.release_date) {
        movie.release_date = '|  ' + movie.release_date.slice(0, 4);
      }
      if (movie.title) {
        movie.title = movie.title.toUpperCase();
      }
      if (!movie.poster_path) {
        movie.poster_path = '/vkcajIqORuKfd8uV2GYULlHut9o.jpg';
      }

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
    console.log(response)
    gallery.innerHTML = createCards(response.data.results)

  } )


  // filmSearch.page = eventData.page;
  // filmSearch.query = searchInput.value;
  // filmSearch.fetchFilmsByQuery().then(response => { 
  //   console.log(response)
  //   gallery.innerHTML = createCards(response.data.results)

  // } )

  


  // gallery.innerHTML = createCards(response.data.results);
});

//додавання атрибуту 
const paginationButtonLast = document.querySelector(".tui-last");

paginationButtonLast.setAttribute("hidden", true);