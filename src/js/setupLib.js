import createCards from '../templates/filmcard.hbs';
const libList = document.querySelector('.js-gallery-library');

export default function setupLib(data) {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            console.log('data',guide);
            const li = `
                <li class='gallery__item' data-id=${id}>
                    <div class='block__image'>
                        <img class='gallery__image' src='https://image.tmdb.org/t/p/w500${poster_path}' alt='${title}'
                            loading='lazy' />
                    </div>
                    <div class='info_movie'>
                        <h2 class='name_movie'>${title}
                        </h2>
                        <p class='genre_movie'>${genres}${release_date}<span class='reting'>${{ vote_average}}</span></p>
                    </div>
                </li>
            `
            html += li;
        });
        // html += createCards(guide);
        libList.innerHTML = html;
    } else {
        libList.innerHTML = '<h2 style ="text-align: center;">You have to log-in to view film gallery</h2>';
    }
}