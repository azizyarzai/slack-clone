import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUkM9a0P5VXzsUhl7CegqeGeKAAyzz1tI",
  authDomain: "slack-clone-dd56b.firebaseapp.com",
  databaseURL: "https://slack-clone-dd56b.firebaseio.com",
  projectId: "slack-clone-dd56b",
  storageBucket: "slack-clone-dd56b.appspot.com",
  messagingSenderId: "1026474051052",
  appId: "1:1026474051052:web:6ec1eba08f75eb1b95ecc9",
  measurementId: "G-JSPK5FQYWE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
