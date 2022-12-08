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
import setupUI from './setupUi';

 //=================================================CONFIG=================================
export const firebaseConfig = {
  apiKey: 'AIzaSyCrP7E5haKTVyI6lKJMTMvuMBrP4RzO9c4',
  authDomain: 'fir-ninja-f883b.firebaseapp.com',
  projectId: 'fir-ninja-f883b',
  appId: '1:103219943409:web:44692b24dfc2797317d650',
  measurementId: 'G-Z7SKLQBVFJ',
};

// =========================================Initialize Firebase=========================
export const app = initializeApp(firebaseConfig);

// Make auth and firestore references
export const auth = getAuth(app);
export const db = getFirestore(app);

// ==================================================SIGNUP=============================  
export const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', onSignup);

export function onSignup(event) {
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
export const logout = document.querySelector('#logout');
// logout.addEventListener('click', onLogoutBtn);

export function onLogoutBtn(event) {
  event.preventDefault();
  signOut(auth).then();
}

// ==================================================LOGIN ================================>
export const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', onLoginBtn);

export function onLoginBtn(event) {
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
    //   alert('Authentication was successful');
    })
    .catch(error => {
      alert('there is no user with such email or password');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}