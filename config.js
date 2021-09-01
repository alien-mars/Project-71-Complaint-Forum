import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/auth";

const firebaseConfig = {
  //Add configuration here
  apiKey: "AIzaSyCpZutVSdXxX0Scpi4x6yuup6qSj7Yob-c",
  authDomain: "complaint-forum-bc471.firebaseapp.com",
  projectId: "complaint-forum-bc471",
  storageBucket: "complaint-forum-bc471.appspot.com",
  messagingSenderId: "180053365210",
  appId: "1:180053365210:web:4423470b3ea9b370d530e3"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore()

