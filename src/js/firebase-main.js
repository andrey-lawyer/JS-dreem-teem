import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { setupUI } from './setupUi';
import { firebaseConfig, auth, db } from './initilizeFB';
import { onSignup, onLoginBtn, onLogoutBtn, signupForm, logout, loginForm } from './initilizeFB';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import setupLib from './setupLib';

// =====================================Listen for auth status changes===================
onAuthStateChanged(auth, user => {
  console.log('user', user);
  if (user) {
    setupUI(user);
    console.log('User logged in. User id: ', user.uid);
  } else {
    // User is signed out
    setupUI();
    console.log('User logged out');
    // alert('Please Log in');
  }
});
signupForm.addEventListener('submit', onSignup);
logout.addEventListener('click', onLogoutBtn);
loginForm.addEventListener('submit', onLoginBtn);