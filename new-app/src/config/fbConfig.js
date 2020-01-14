import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3EK79yqGOp6nz0x2uiLHxEiN48bjtuHA",
    authDomain: "visualizer-830ec.firebaseapp.com",
    databaseURL: "https://visualizer-830ec.firebaseio.com",
    projectId: "visualizer-830ec",
    storageBucket: "visualizer-830ec.appspot.com",
    messagingSenderId: "34173820574",
    appId: "1:34173820574:web:a6b1cdca6ba68321b0a58f"
  };
  // Initialize Firebase

  
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const settings = {/* your settings... */};
  firestore.settings(settings);
  //firebase.firestore.settings({ timestampsInSnapshots: true });
  

  export default firebase;