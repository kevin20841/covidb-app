import firebase from 'firebase';

import config from '../config';

// Get a reference to the database service
firebase.initializeApp(config);
const database = firebase.database();

// Fetch the links to display
export function fetchLinks(callback) {
  database.ref('articles').on('value', (snapshot) => {
    const newLinks = snapshot.val();
    callback(newLinks);
  });
}
