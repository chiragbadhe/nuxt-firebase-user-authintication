import firebase from 'firebase/app';
import 'firebase/auth'
 
 const firebaseConfig = {
    apiKey: "AIzaSyC5dfJE7Ma3-DF6tpzNfrwr8a_FmR505y0",
    authDomain: "prismeto-bae0c.firebaseapp.com",
    databaseURL: "https://prismeto-bae0c.firebaseio.com",
    projectId: "prismeto-bae0c",
    storageBucket: "prismeto-bae0c.appspot.com",
    messagingSenderId: "762087340680",
    appId: "1:762087340680:web:69ce2ca370955cd0f77d3d",
    measurementId: "G-HVRE4DJJ66"
  };

  let app = null;

  if(!firebase.apps.length){

    app = firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;