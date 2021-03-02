import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDrTj_xvNrB5UAX6uNJYfuMTOxI7iDGBlk",
    authDomain: "booksanta-21f2d.firebaseapp.com",
    projectId: "booksanta-21f2d",
    storageBucket: "booksanta-21f2d.appspot.com",
    messagingSenderId: "76114008916",
    appId: "1:76114008916:web:f2c57fd14fcdeaf5dc86c1",
    measurementId: "G-GB7B3Z4HBT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();