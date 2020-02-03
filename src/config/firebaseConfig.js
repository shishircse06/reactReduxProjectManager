import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBVtKAX31kxfXmp_uoKDYPMV5sC9kBJpCM",
  authDomain: "react-redux-firebase-82e7a.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-82e7a.firebaseio.com",
  projectId: "react-redux-firebase-82e7a",
  storageBucket: "react-redux-firebase-82e7a.appspot.com",
  messagingSenderId: "1053756630097",
  appId: "1:1053756630097:web:87900ac2546b33bc420470",
  measurementId: "G-VJCDKNMBWX"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true})
export default firebase