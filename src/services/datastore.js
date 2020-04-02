import firebase from 'firebase';

import config from '../config';

// Get a reference to the database service
firebase.initializeApp(config);
const db = firebase.firestore();

// Fetch the links to display
export function fetchLinks(callback) {
  db.collection('articles').get()
  .then((snapshot) => {
    console.log(snapshot)
    callback(snapshot);
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}
