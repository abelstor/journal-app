import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPHhEtjse_4NyEDdGrp9YgorMGZRNdXGM",
    authDomain: "react-journal-70613.firebaseapp.com",
    projectId: "react-journal-70613",
    storageBucket: "react-journal-70613.appspot.com",
    messagingSenderId: "1077421201696",
    appId: "1:1077421201696:web:c882069cea00688d181f45"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}