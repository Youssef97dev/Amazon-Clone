import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKH0J-1cRamlwn5lcftqWfXDjs8TY4mN8",
    authDomain: "clone-79a07.firebaseapp.com",
    projectId: "clone-79a07",
    storageBucket: "clone-79a07.appspot.com",
    messagingSenderId: "134888215362",
    appId: "1:134888215362:web:d9a3c28b37facbdab3aedb",
    measurementId: "G-J886CCHCDJ"
});


const auth = firebase.auth();

export {auth};