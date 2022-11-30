'use strict';

import axios from 'axios';
import { Spinner } from 'spin.js';

export class FilmSearch {
  #URL = 'https://api.themoviedb.org/3/search/movie';
  #API_KEY = '87582cb7f63615fc9dcd406a264f6674';

  constructor() {
    this.page = 1;
    this.total_results = null;
    this.query = null;
    this.per_page = 20;
  }

  fetchFilmsByQuery() {
    const searchParams = new URLSearchParams({
      page: this.page,
      //   per_page: this.per_page,
      api_key: this.#API_KEY,
      query: this.query,
      include_adult: false,
    });
    return axios.get(`${this.#URL}/?${searchParams}`);
  }

  isNextDataExist() {
    return this.page * this.per_page < this.total_results;
  }
}
