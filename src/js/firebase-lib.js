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

 //=================================================CONFIG=================================
const firebaseConfig = {
  apiKey: 'AIzaSyCrP7E5haKTVyI6lKJMTMvuMBrP4RzO9c4',
  authDomain: 'fir-ninja-f883b.firebaseapp.com',
  projectId: 'fir-ninja-f883b',
  appId: '1:103219943409:web:44692b24dfc2797317d650',
  measurementId: 'G-Z7SKLQBVFJ',
};

// =========================================Initialize Firebase=========================
const app = initializeApp(firebaseConfig);

// Make auth and firestore references
const auth = getAuth(app);
const db = getFirestore(app);

//=================================================================================================DATA===================================================================
const queueRef = document.querySelector('.js-library-queue');
// console.log("queueRef", queueRef);
queueRef.addEventListener('click', getQueue);
const colRef = collection(db, "guides");

function getQueue() { 
  getDocs(colRef)
    .then((snapshot) => {
      console.log("snapshot", snapshot.docs);
      setupLib(snapshot.docs);
    })
    .catch(err => console.log(err));
}

// =====================================Listen for auth status changes===================
const btnWatchRef = document.querySelector('.js-library-watch');
const btnQueueRef = document.querySelector('.js-library-queue');

onAuthStateChanged(auth, user => {
  console.log('user', user);
    if (user) {
      btnWatchRef.removeAttribute('disabled');
      btnQueueRef.removeAttribute('disabled');
      getQueue();
      console.log('User logged in. User id: ', user.uid);
  } else {
    // User is signed out
      console.log('User logged out');
      setupLib([]);
      btnWatchRef.setAttribute('disabled', true);
      btnQueueRef.setAttribute('disabled', true);
  }
});

// ==================================================SIGNUP=============================  
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', onSignup);

function onSignup(event) {
  event.preventDefault();
  // Get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  console.log(email, password);

  // Signup user
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('user', user);

      signupForm.reset();
    })
    .catch(error => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// =================================================LOGOUT=============================
const logout = document.querySelector('#logout');
logout.addEventListener('click', onLogoutBtn);

function onLogoutBtn(event) {
  event.preventDefault();
  signOut(auth).then();
}

// ==================================================LOGIN ================================>
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', onLoginBtn);

function onLoginBtn(event) {
  event.preventDefault();
  // Get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      loginForm.reset();
      alert('Authentication was successful');
    })
    .catch(error => {
      alert('there is no user with such email or password');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
