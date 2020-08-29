const firebase = require('firebase/app');

require("firebase/firestore");
const fire =  firebase.initializeApp({
  apiKey: "AIzaSyArs0EcU3-p3wYRQ3cGrQW2N79d9TMoTqA",
  authDomain: "cordelesmx-2db1f.firebaseapp.com",
  databaseURL: "https://cordelesmx-2db1f.firebaseio.com",
  projectId: "cordelesmx-2db1f",
  storageBucket: "cordelesmx-2db1f.appspot.com",
  messagingSenderId: "1037073273377",
  appId: "1:1037073273377:web:ffde00be16f2a3ee718960"
  });

const defaultAnalytics = firebase.analytics;
export default fire.firestore();