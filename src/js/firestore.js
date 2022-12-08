import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
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
const db = getFirestore(app);

// Get Data
const queueRef = document.querySelector('.js-library-queue');
// console.log("queueRef", queueRef);
queueRef.addEventListener('click', getQueue);
const colRef = collection(db, "guides");

export function getQueue() { 
  getDocs(colRef)
    .then((snapshot) => {
      console.log("snapshot", snapshot.docs);
      setupLib(snapshot.docs);
    })
    .catch(err => console.log(err));
}
// fetchFilmsByID()
// Add Data
// const queueBtnRef = document.querySelector('.js-Queuee')
// queueBtnRef.addEventListener('click', addFilmQueue)
// function addFilmQueue(event) { 
//     event.preventDefault();
//     addDoc(colRef, {...dateFilm})
// }