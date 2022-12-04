import Notiflix from 'notiflix';
import { FilmSearch } from './filmsearch';
import createCards from '../templates/filmcard.hbs';
import createMovieInfoModal from '../templates/modal.hbs';
import { Trending } from './trending';
import { genres } from './genres';
import { Spinner } from 'spin.js';
import { GetFullMovieInfo } from './getFullMovieInfo';


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery-home');
const movieInfoModalEl = document.querySelector('.js-movie-info');
const jsContainer = document.querySelector('.js-container-movie');
// const loadMoreBtn = document.querySelector('.load-more');
const filmSearch = new FilmSearch();
const trending = new Trending();
const getFullMovieInfo = new GetFullMovieInfo();
console.log("getFullMovieInfo", getFullMovieInfo)
const inputEl = document.querySelector('#search__input');
// const inputEl = document.querySelector('#search__input');
//
const buttonWathedModal = document.querySelector('.js-Wathed');
const buttonQueueModal = document.querySelector('.js-Queuee');
const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';
export let dateFilm;
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

// ====================Search Films========================
const onSearchFormSubmit = async event => {
  event.preventDefault();

  const spinner = new Spinner(opts).spin();
  galleryEl.prepend(spinner.el);

  filmSearch.query = event.currentTarget.elements.searchQuery.value;
  filmSearch.page = 1;

  try {
    const response = await filmSearch.fetchFilmsByQuery();
    console.log("onSearchFormSubmit ~ response", response)

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

    galleryEl.innerHTML = createCards(response.data.results);
    //   !!!!!!
  } catch (error) {
    Notiflix.Notify.failure(console.log(error));
  }
  spinner.stop();
};

// =========================load more===================
// const onLoadMoreBtnClick = async event => {
//   const spinner = new Spinner(opts).spin(); // spinner
//   galleryEl.prepend(spinner.el); //spinner

//   if (!filmSearch.isNextDataExist()) {
//     // loadMoreBtn.classList.add('is-hidden');
//     Notiflix.Notify.failure('sorry, the end of search results reached.');
//     return;
//   }
//   filmSearch.page += 1;

//   try {
//     const response = await filmSearch.fetchFilmsByQuery();
//     filmSearch.total_results = response.data.total_results;

//     galleryEl.insertAdjacentHTML(
//       'beforeend',
//       createCards(response.data.results)
//     );
//     //   !!!!!!
//   } catch (error) {
//     console.log(error);
//   }
//   spinner.stop();
//   //   scroll
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// };

searchFormEl.addEventListener('submit', onSearchFormSubmit);
// loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

// ===========================trending====================
const loadTrendingMovies = async event => {
  const spinner = new Spinner(opts).spin();
  galleryEl.prepend(spinner.el);

  try {
    const response = await trending.fetchTrendingFilms();
    trending.total_results = response.data.total_results;

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

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createCards(response.data.results)
    );
  } catch (error) {
    console.log(error);
  }
  spinner.stop();
};

loadTrendingMovies();

// ================================Full movie info card modal=========================
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
    // Add local storage!!!!!!!!!!!!!!!
    dateFilm = response.data;
    buttonWathedModal.disabled = false;
    buttonQueueModal.disabled = false;
    // Add local storage!!!!!!!!!!!!!!!!
  } catch (error) {
    Notiflix.Notify.failure(console.log(error));
  }
  
  spinner.stop();
};

console.log("onFilmCardClick ~ dateFilm", dateFilm)
galleryEl.addEventListener('click', onFilmCardClick);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Add local storage!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
buttonWathedModal.addEventListener('click', () => {
  addLocalStorageWatch(dateFilm);
});
buttonQueueModal.addEventListener('click', () => {
  addLocalStorageQueue(dateFilm);
});

let arrayWathed = [];
let arrayQueue = [];
function addLocalStorageWatch(date) {
  buttonWathedModal.disabled = true;
  buttonQueueModal.disabled = true;
  let {
    genres,
    homepage,
    id,
    original_title,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    release_date,
  } = date;

  const dateLocalWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  const dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));

  if (arrayWathed.length > 0) {
    const findWatch = dateLocalWatch.find(el => el.id === id);
    if (findWatch) {
      Notiflix.Notify.failure('Sorry, this movie has already been added');
      return;
    }
  }
  if (arrayQueue.length > 0) {
    const findQueue = dateLocalQueue.find(el => el.id === id);
    if (findQueue) {
      Notiflix.Notify.failure('Sorry, this movie has already been added');
      return;
    }
  }

  if (genres.length > 3) {
    genres = [genres[0], genres[1], 'Оther'];
  }
  genres = genres.join();
  release_date = ' |  ' + release_date.slice(0, 4);
  const newObject = {
    genres,
    homepage,
    id,
    original_title,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    release_date,
  };

  arrayWathed.push(newObject);
  localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(arrayWathed));

  // const dateLocal = localStorage.getItem(STORAGE_KEY_WATCHED);
  // console.log(JSON.parse(dateLocal));
}

function addLocalStorageQueue(date) {
  buttonWathedModal.disabled = true;
  buttonQueueModal.disabled = true;
  let {
    genres,
    homepage,
    id,
    original_title,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    release_date,
  } = date;

  const dateLocalWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  const dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));

  if (arrayWathed.length > 0) {
    const findWatch = dateLocalWatch.find(el => el.id === id);
    if (findWatch) {
      Notiflix.Notify.failure('Sorry, this movie has already been added');
      return;
    }
  }
  if (arrayQueue.length > 0) {
    const findQueue = dateLocalQueue.find(el => el.id === id);
    if (findQueue) {
      Notiflix.Notify.failure('Sorry, this movie has already been added');
      return;
    }
  }

  if (genres.length > 3) {
    genres = [genres[0], genres[1], 'Оther'];
  }
  genres = genres.join();
  release_date = ' |  ' + release_date.slice(0, 4);
  const newObject = {
    genres,
    homepage,
    id,
    original_title,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    release_date,
  };
  arrayQueue.push(newObject);
  localStorage.setItem(STORAGE_KEY_QUEUEE, JSON.stringify(arrayQueue));
}
console.log(localStorage);
const d = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));
console.log(d);
localStorage.clear();


//====================================================================================================================================================================
// import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';

// //=================================================CONFIG=================================
// const firebaseConfig = {
//   apiKey: 'AIzaSyCrP7E5haKTVyI6lKJMTMvuMBrP4RzO9c4',
//   authDomain: 'fir-ninja-f883b.firebaseapp.com',
//   projectId: 'fir-ninja-f883b',
//   appId: '1:103219943409:web:44692b24dfc2797317d650',
//   measurementId: 'G-Z7SKLQBVFJ',
// };

// // =========================================Initialize Firebase=========================
// const app = initializeApp(firebaseConfig);

// // Make auth and firestore references
// const db = getFirestore(app);

// const queueRef = document.querySelector('.js-library-queue');
// console.log("queueRef", queueRef);
// queueRef.addEventListener('click', getQueue);
// const colRef = collection(db, "guides")
// // let arrayWathed = [];
// // let arrayQueue = [];
// function addLocalStorageWatch(date) {
//   // buttonWathedModal.disabled = true;
//   // buttonQueueModal.disabled = true;
//   addDoc(colRef, { ...date });
//   // let {
//   //   genres,
//   //   homepage,
//   //   id,
//   //   original_title,
//   //   poster_path,
//   //   title,
//   //   vote_average,
//   //   vote_count,
//   //   popularity,
//   //   release_date,
//   // } = date;
//   // const dateLocalWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
//   // const dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));

//   // if (arrayWathed.length > 0) {
//   //   const findWatch = dateLocalWatch.find(el => el.id === id);
//   //   if (findWatch) {
//   //     Notiflix.Notify.failure('Sorry, this movie has already been added');
//   //     return;
//   //   }
//   // }
//   // if (arrayQueue.length > 0) {
//   //   const findQueue = dateLocalQueue.find(el => el.id === id);
//   //   if (findQueue) {
//   //     Notiflix.Notify.failure('Sorry, this movie has already been added');
//   //     return;
//   //   }
//   // }

//   // if (genres.length > 3) {
//   //   genres = [genres[0], genres[1], 'Оther'];
//   // }
//   // genres = genres.join();
//   // release_date = ' |  ' + release_date.slice(0, 4);
//   // const newObject = {
//   //   genres,
//   //   homepage,
//   //   id,
//   //   original_title,
//   //   poster_path,
//   //   title,
//   //   vote_average,
//   //   vote_count,
//   //   popularity,
//   //   release_date,
//   // };

//   // arrayWathed.push(newObject);
//   // localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(arrayWathed));

//   // const dateLocal = localStorage.getItem(STORAGE_KEY_WATCHED);
//   // console.log(JSON.parse(dateLocal));
// }

// function getQueue() { 
//   getDocs(colRef) 
//     .then((snapshot) => {
//       console.log("snapshot", snapshot.docs)
//       let guides = [];
//       snapshot.docs.forEach((doc) => {
//         guides.push({ ...doc.data(), id: doc.id })
//         });
//       console.log(guides);
//     })
//    .catch(err => console.log(err))
// }
// // function addLocalStorageQueue(date) {
// //   buttonWathedModal.disabled = true;
// //   buttonQueueModal.disabled = true;
// //   let {
// //     genres,
// //     homepage,
// //     id,
// //     original_title,
// //     poster_path,
// //     title,
// //     vote_average,
// //     vote_count,
// //     popularity,
// //     release_date,
// //   } = date;

// //   const dateLocalWatch = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
// //   const dateLocalQueue = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUEE));

// //   if (arrayWathed.length > 0) {
// //     const findWatch = dateLocalWatch.find(el => el.id === id);
// //     if (findWatch) {
// //       Notiflix.Notify.failure('Sorry, this movie has already been added');
// //       return;
// //     }
// //   }
// //   if (arrayQueue.length > 0) {
// //     const findQueue = dateLocalQueue.find(el => el.id === id);
// //     if (findQueue) {
// //       Notiflix.Notify.failure('Sorry, this movie has already been added');
// //       return;
// //     }
// //   }

// //   if (genres.length > 3) {
// //     genres = [genres[0], genres[1], 'Оther'];
// //   }
// //   genres = genres.join();
// //   release_date = ' |  ' + release_date.slice(0, 4);
// //   const newObject = {
// //     genres,
// //     homepage,
// //     id,
// //     original_title,
// //     poster_path,
// //     title,
// //     vote_average,
// //     vote_count,
// //     popularity,
// //     release_date,
// //   };
// //   arrayQueue.push(newObject);
// //   localStorage.setItem(STORAGE_KEY_QUEUEE, JSON.stringify(arrayQueue));
// // }