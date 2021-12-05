import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: 'AIzaSyA36t5RLrwIb9Cb8-s_VO7Rz2mI0DbRPNU',
  authDomain: 'subscriptions-943df.firebaseapp.com',
  projectId: 'subscriptions-943df',
  storageBucket: 'subscriptions-943df.appspot.com',
  messagingSenderId: '748477411153',
  appId: '1:748477411153:web:24c6db322b4cafc1146d70'
};

const db = firebase.initializeApp(config);

export default db.firestore();
