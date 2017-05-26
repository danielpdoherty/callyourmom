import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDEwpvghNbAFRzifrdoJCZFk4qGWZCkz3k",
    authDomain: "callyourmom-22b1e.firebaseapp.com",
    databaseURL: "https://callyourmom-22b1e.firebaseio.com",
    projectId: "callyourmom-22b1e",
    storageBucket: "callyourmom-22b1e.appspot.com",
    messagingSenderId: "238966496960"
  };

  firebase.initializeApp(config);

const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { database, auth };
export { firebaseListToArray };


export default firebase;