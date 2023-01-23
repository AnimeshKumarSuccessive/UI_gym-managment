import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';


console.log('signInWithRedirect', signInWithRedirect());

const firebaseConfig = {
    apiKey: "AIzaSyB59TOyQLRxYtQ2EezCGKy-C0I94obAikM",
    authDomain: "crwn-clothing-db-63111.firebaseapp.com",
    projectId: "crwn-clothing-db-63111",
    storageBucket: "crwn-clothing-db-63111.appspot.com",
    messagingSenderId: "849866060080",
    appId: "1:849866060080:web:a264970a5f89b49ec518f5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  console.log('firebaseApp', firebaseApp);

  const Provider = new GoogleAuthProvider();

  Provider.setCustomParameters({
      promt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = signInWithPopup(auth, Provider);
