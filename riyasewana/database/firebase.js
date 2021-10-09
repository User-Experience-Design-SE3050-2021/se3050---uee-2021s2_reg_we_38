import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-pIlPm_NjphOMlEf-FAte0sKBGO__y2M",
    authDomain: "uee-project-f274d.firebaseapp.com",
    projectId: "uee-project-f274d",
    storageBucket: "uee-project-f274d.appspot.com",
    messagingSenderId: "651494659510",
    appId: "1:651494659510:web:7bef86b2b20b38459ddd17"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
      firebase,
      db,
  }