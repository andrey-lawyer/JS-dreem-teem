import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import setupLib from './setupLib'; 
import { setupUI } from './setupUi';
import { firebaseConfig, auth, db } from './initilizeFB';
import { onSignup, onLoginBtn, onLogoutBtn, signupForm, logout, loginForm } from './initilizeFB';

//==========================================================DATA===================================================================
const queueRef = document.querySelector('.js-library-queue');
queueRef.addEventListener('click', getCol);
const queueColRef = collection(db, "Queue");

const watchedRef = document.querySelector('.js-library-watch');
watchedRef.addEventListener('click', getCol);
const watchedColRef = collection(db, "Watched");


function getCol(event) {
  if (event.target.classList.contains('js-library-queue')) {
    getDocs(queueColRef)
      .then((snapshot) => {
        console.log("snapshot", snapshot.docs);
        setupLib(snapshot.docs);
      })
      .catch(err => console.log(err));
  }
  if (event.target.classList.contains('js-library-watch')) {
    getDocs(watchedColRef)
      .then((snapshot) => {
        console.log("snapshot", snapshot.docs);
        setupLib(snapshot.docs);
      })
      .catch(err => console.log(err));
  }
}

// =====================================Listen for auth status changes===================
// const btnWatchRef = document.querySelector('.js-library-watch');
// const btnQueueRef = document.querySelector('.js-library-queue');

onAuthStateChanged(auth, user => {
  console.log('user', user);
  if (user) {
     // User is signed up
      queueRef.style.visibility = 'visible';
      watchedRef.style.visibility = 'visible';
      getDocs(queueColRef)
      .then((snapshot) => {
        console.log("snapshot", snapshot.docs);
        setupLib(snapshot.docs);
      })
      .catch(err => console.log(err));
      setupUI(user);
      console.log('User logged in. User id: ', user.uid);
  } else {
    // User is signed out
      console.log('User logged out');
      setupLib([]);
      setupUI();
      watchedRef.style.visibility = 'hidden';
      queueRef.style.visibility = 'hidden';
  }
});
signupForm.addEventListener('submit', onSignup);
logout.addEventListener('click', onLogoutBtn);
loginForm.addEventListener('submit', onLoginBtn);

