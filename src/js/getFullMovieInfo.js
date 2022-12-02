'use strict';

import axios from 'axios';
import { Spinner } from 'spin.js';

export class GetFullMovieInfo {
  #URL = 'https://api.themoviedb.org/3/movie';
  #API_KEY = '87582cb7f63615fc9dcd406a264f6674';

  constructor() {
    // this.page = 1;
    // this.total_results = null;
    // this.query = null;
    // this.per_page = 20;
    this.id = null;
  }

  fetchFilmsByID() {
    const searchParams = new URLSearchParams({
      // page: this.page,
      //   per_page: this.per_page,
      api_key: this.#API_KEY,
      // query: this.query,
      // include_adult: false,
    });
    return axios.get(`${this.#URL}/${this.id}?${searchParams}`);
  }
}
