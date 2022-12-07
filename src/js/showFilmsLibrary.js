import createCards from '../templates/filmcardLibrary.hbs';
import Notiflix from 'notiflix';

const STORAGE_KEY_WATCHED = 'wathedlist-films';
const STORAGE_KEY_QUEUEE = 'queuee-films';

export function toCardModalLibrary() {
  const dateLocalWathed = localStorage.getItem(STORAGE_KEY_WATCHED);
  const dateLocalQueuee = localStorage.getItem(STORAGE_KEY_QUEUEE);
  const parsedateLocalWathed = JSON.parse(dateLocalWathed);
  const parsedateLocalQueuee = JSON.parse(dateLocalQueuee);
  // console.log(parsedateLocalQueuee);

  const refs = {
    buttonLibraryWatched: document.querySelector('.js-library-watch'),
    buttonLibraryQueue: document.querySelector('.js-library-queue'),

    containerLibrary: document.querySelector('.js-gallery-library'),

    buttonLoadMoreWatched: document.querySelector('.watched'),
    buttonLoadMoreQueue: document.querySelector('.queue'),
  };

  refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';

  // LOAD-MORE!!!!!!!!!!!!!!!!!!!!!!

  refs.buttonLoadMoreWatched.style.display = 'none';
  refs.buttonLoadMoreQueue.style.display = 'none';
  // !!!!!!!!!!!!!!!!!!!!!!
  let counterBegin = 0;
  let counterEnd = 0;
  function CardsLoadmore(date, button) {
    counterBegin = 0;
    counterEnd = 0;
    if (date.length <= 18) {
      refs.containerLibrary.innerHTML = createCards(date);
    } else {
      refs.containerLibrary.innerHTML = createCards(date.slice(0, 18));
      button.style.display = 'block';
    }
  }
  // console.log(parsedateLocalWathed);
  // console.log(parsedateLocalWathed);
  if (!parsedateLocalWathed || parsedateLocalWathed.length == 0) {
    const images = `
   <div >        
          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"
          alt="movie" loading="lazy" />     
   </div>
      `;
    refs.containerLibrary.innerHTML = images;
  } else {
    CardsLoadmore(parsedateLocalWathed, refs.buttonLoadMoreWatched);
  }
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function onClickLoadMore(date, buttons) {
    counterBegin += 18;
    counterEnd += counterBegin + 18;
    if (date.length <= counterBegin) {
      buttons.style.display = 'none';
      // refs.buttonLoadMore.removeEventListener('click', onClickLoadMore);
      Notiflix.Notify.failure('Sorry, no more movies here');
    } else {
      refs.containerLibrary.insertAdjacentHTML(
        'beforeend',
        createCards(date.slice(counterBegin, counterEnd))
      );
    }
  }
  //
  refs.buttonLoadMoreWatched.addEventListener('click', () =>
    onClickLoadMore(parsedateLocalWathed, refs.buttonLoadMoreWatched)
  );

  refs.buttonLoadMoreQueue.addEventListener('click', () =>
    onClickLoadMore(parsedateLocalQueuee, refs.buttonLoadMoreQueue)
  );

  // LOAD-MORE!!!!!!!!!!!!!!!!!!!

  const onShowQueue = () => {
    refs.buttonLibraryWatched.style.backgroundColor = 'transparent';
    refs.buttonLibraryQueue.style.backgroundColor = '#ff6b01';
    if (!parsedateLocalQueuee || parsedateLocalQueuee.length == 0) {
      const images = `
   <div >        
          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"
          alt="movie" loading="lazy" />     
   </div>
      `;
      refs.containerLibrary.innerHTML = images;
    } else {
      refs.buttonLoadMoreWatched.style.display = 'none';
      // refs.containerLibrary.innerHTML = createCards(parsedateLocalQueuee);
      CardsLoadmore(parsedateLocalQueuee, refs.buttonLoadMoreQueue);
    }
  };

  refs.buttonLibraryQueue.addEventListener('click', onShowQueue);

  const onShowWatched = () => {
    refs.buttonLibraryQueue.style.backgroundColor = 'transparent';
    refs.buttonLibraryWatched.style.backgroundColor = '#ff6b01';
    if (!parsedateLocalWathed || parsedateLocalWathed.length == 0) {
      const images = `
   <div >        
          <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"
          alt="movie" loading="lazy" />     
   </div>
      `;
      refs.containerLibrary.innerHTML = images;
    } else {
      refs.buttonLoadMoreQueue.style.display = 'none';
      CardsLoadmore(parsedateLocalWathed, refs.buttonLoadMoreWatched);
    }
  };
  refs.buttonLibraryWatched.addEventListener('click', onShowWatched);
}
toCardModalLibrary();
