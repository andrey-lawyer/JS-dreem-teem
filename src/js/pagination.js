import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import Notiflix from 'notiflix';
import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import { Trending } from './trending';
import { genres } from './genres';
import { Spinner } from 'spin.js';

import createCards from '../templates/filmcard.hbs';

const gallery = document.querySelector('.gallery');
const searchFormEl = document.querySelector('.js-search-form');

const filmSearch = new FilmSearch();
const trending = new Trending();
const response = filmSearch.fetchFilmsByQuery();

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
  filmSearch.page = eventData.page;
  filmSearch.query = 'cat';
  filmSearch.fetchFilmsByQuery().then(response => { 
    console.log(response)
    gallery.innerHTML = createCards(response.data.results)

  } )
  // gallery.innerHTML = createCards(response.data.results);
});

//додавання атрибуту 
const paginationButtonLast = document.querySelector(".tui-last");
const paginationImageLast = document.querySelector(".tui-ico-last");

paginationButtonLast.classList. add("tui-is-disabled")
paginationImageLast.classList.add("tui-is-disabled")
// paginationButtonLast.setAttribute("hidden", true);


