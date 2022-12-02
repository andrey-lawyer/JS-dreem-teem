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
 
const filmSearch = new FilmSearch();
const trending = new Trending();
const response = filmSearch.fetchFilmsByQuery();

const container = document.getElementById('pagination');
const options = { // below default value of options
     totalItems: 10000,
     itemsPerPage: 20,
     visiblePages: 5,
     page: 1,
     centerAlign: true,
     firstItemClassName: 'pagination-first-child',
     lastItemClassName: 'pagination-last-child',
     template: {
            page: '<a href="#" class="pagination-button">{{page}}</a>',
            currentPage: '<strong class="pagination-current-button current-page-pag pagination">{{page}}</strong>',
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
                '</a>'
    },
};


const pagination = new Pagination(container, options);
  let currentPage 
  pagination.on('afterMove', (eventData) => {
    currentPage = eventData.page;
    gallery.innerHTML = '';
    const arrCards = fetchMovieCard();
    appendCardMarkup(arrCards);
  }
);


//Дістаємо данні

function fetchMovieCard() {
  const res = axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=9cda16d98a6e510af2decf0d66e8e7d5&page=${currentPage}`
  );
  return res.data;
}

//Рендеримо картку

function appendCardMarkup(event) {
  filmSearch.query = event.currentTarget.elements.searchQuery.value;
  response.data.results.forEach(movie => {
    if (movie.release_date) {
      movie.release_date = '|  ' + movie.release_date.slice(0, 4);
    }
    if (movie.original_title) {
      movie.original_title = movie.original_title.toUpperCase();
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

  galleryEl.innerHTML = createCards(response.data.results);
}
