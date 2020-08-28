const firebase = require('firebase/app');

require("firebase/firestore");

const fire =  firebase.initializeApp({
    apiKey: "AIzaSyCiByPXGc0gIuiPfRrzNK7AYBCAbm9H6kc",
    authDomain: "cordeles-55253.firebaseapp.com",
    databaseURL: "https://cordeles-55253.firebaseio.com",
    projectId: "cordeles-55253",
    storageBucket: "cordeles-55253.appspot.com",
    messagingSenderId: "391973666687",
    appId: "1:391973666687:web:6790b13dc09ef6b3a1a44a",
    measurementId: "G-JBQSMTMWV9"
  })

export default fire.firestore()