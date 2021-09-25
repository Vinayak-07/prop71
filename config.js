import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAAci8ku2r3A97uVjwDZUluWvj08jqP6ow",
  authDomain: "prop71-5c2c5.firebaseapp.com",
  projectId: "prop71-5c2c5",
  storageBucket: "prop71-5c2c5.appspot.com",
  messagingSenderId: "826750954960",
  appId: "1:826750954960:web:fa4c50e20c69547e579dd5"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

