
import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

const config = {
      apiKey: "AIzaSyCgvfQsFJN2Qgr8Fk2WdsGm_SUKeZxvRmw",
      authDomain: "coffee-shop-229518.firebaseapp.com",
      databaseURL: "https://coffee-shop-229518.firebaseio.com",
      projectId: "coffee-shop-229518",
      storageBucket: "coffee-shop-229518.appspot.com",
      messagingSenderId: "659278371514"
    };
firebase.initializeApp(config);

//firebase.firestore().settings(settings);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();
