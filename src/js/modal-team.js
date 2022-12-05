import teamTemplate from '../templates/modal-team.hbs';
import team from '../templates/team_info.json';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

const modalContainer = document.querySelector('#js-modal-team');
modalContainer.addEventListener('click', openModal);

function openModal(event) {
  //   Loading.pulse('Loading...', { svgColor: '#FF6B08' });
  event.preventDefault();
  try {
    // Loading.remove();
    // console.log('open modal clicked');
    getTeamInfo(team);
  } catch (error) {
    return;
  }
}

function getTeamInfo(e) {
  //   console.log('getting team info');
  const teamMarkup = teamTemplate(e);
  const modalContent = basicLightbox.create(teamMarkup);

  modalContent.show();
  //   modalContent.show(() => console.log('lightbox now visible'));
  //   const visible = modalContent.visible();

  window.addEventListener('keydown', closeModalEsc);

  function closeModalEsc(event) {
    if (event.code === 'Escape') {
      modalContent.close();
      window.removeEventListener('keydown', closeModalEsc);
    }
  }

  const btnCloseRef = document.querySelector('.team__close-btn');
  btnCloseRef.addEventListener('click', closeModalBtn);

  function closeModalBtn() {
    modalContent.close();

    btnCloseRef.removeEventListener('click', closeModalBtn);
  }
}
