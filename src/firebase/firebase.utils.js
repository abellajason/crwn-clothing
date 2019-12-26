import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3tHDzVYiQifD5Edl23KVNMxHvZdk4ksA",
    authDomain: "crwn-db-2db41.firebaseapp.com",
    databaseURL: "https://crwn-db-2db41.firebaseio.com",
    projectId: "crwn-db-2db41",
    storageBucket: "crwn-db-2db41.appspot.com",
    messagingSenderId: "715100010736",
    appId: "1:715100010736:web:6b8d256e736bb508a5ea35",
    measurementId: "G-V2VCWM05ZG"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;