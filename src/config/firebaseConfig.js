import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import Keys from '../keys';
const firebaseConfig = {
  apiKey: `${Keys.apiKey}`,
  authDomain: `${Keys.authDomain}`,
  databaseURL: `${Keys.databaseURL}`,
  projectId: `${Keys.projectId}`,
  storageBucket: `${Keys.storageBucket}`,
  messagingSenderId: `${Keys.messagingSenderId}`,
  appId: `${Keys.appId}`,
  measurementId: `${Keys.measurementId}`
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true})
export default firebase