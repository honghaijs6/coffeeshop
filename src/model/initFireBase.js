import {auth, database, provider} from "../config/firebase";
import {AsyncStorage} from 'react-native';
import store from '../redux/store';


import { AVATAR_URL } from '../config/const';




export function register(data,onSuccess,onError) {


  auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((resp) => {

          console.log(resp);

          data.uid = resp.user.uid;

          data.createdAt = new Date().getTime();
          data.updatedAt = data.createdAt;
          data.photoURL = AVATAR_URL;

          /*data.createdAt  = resp.user.createdAt;
          data.lastLoginAt = resp.user.lastLoginAt;
          data.photoURL = resp.user.photoURL;
          data.phoneNumber = resp.user.phoneNumber;
          */


          const userRef = database.ref().child('users');

          userRef.child(data.uid).update({...data})
              .then(() => {
                  onSuccess(data);
              })
              .catch((error) => { onError(error); });
      })
      .catch((error) => { onError(error); } );
}

//Create the user object in realtime database
export function createUser(user) {
  return new Promise((resolve, reject) => {
      const userRef = database.ref().child('users');

      userRef.child(user.uid).update({...user})
          .then(() => {
              //dispatch({type: t.LOGGED_IN, user});
              resolve(user)
          })
          .catch((error) => reject({message: error}));
  });
}


export function doLogin(data,onSuccess,onError){

  const {email, password} = data;

  auth.signInWithEmailAndPassword(email, password)
      .then((resp) => {
          //Get the user object from the realtime database
          let {user} = resp;

          console.log(user);


          database.ref('users').child(user.uid).once('value')
              .then((snapshot) => {

                  const exists = (snapshot.val() !== null);

                  //if the user exist in the DB, replace the user variable with the returned snapshot
                  if (exists) user = snapshot.val();

                  //if (exists) dispatch({type: t.LOGGED_IN, user});

                  store.dispatch({
                    type:'LOGIN',
                    isLoggedIn:true,
                    userInfo:user
                  });

                  onSuccess({exists, user});
              })
              .catch((error) => { onError(error)  });
      })
      .catch((error) => {  onError(error) }  );

}

//Sign the user in with their email and password
export function login(data) {
  return new Promise((resolve, reject) => {
      const {email, password} = data;
      auth.signInWithEmailAndPassword(email, password)
          .then((resp) => {
              //Get the user object from the realtime database
              let {user} = resp;
              database.ref('users').child(user.uid).once('value')
                  .then((snapshot) => {

                      const exists = (snapshot.val() !== null);

                      //if the user exist in the DB, replace the user variable with the returned snapshot
                      if (exists) user = snapshot.val();

                      //if (exists) dispatch({type: t.LOGGED_IN, user});

                      resolve({exists, user});
                  })
                  .catch((error) => reject(error));
          })
          .catch((error) => reject(error));
  });
}


export function resetPassword(data) {
  return new Promise((resolve, reject) => {
      const {email} = data;
      auth.sendPasswordResetEmail(email)
          .then(() => resolve())
          .catch((error) => reject(error));
  });
}


//Sign user out
export function doSignOut(onSuccess,onError){
  auth.signOut()
      .then(() => {
        store.dispatch({
          type:'LOGIN',
          isLoggedIn:false,

        });

        onSuccess(true)

      }  )
      .catch((error) => onError(error));
}

export function signOut() {
  return new Promise((resolve, reject) => {
      auth.signOut()
          .then(() => resolve())
          .catch((error) => reject(error));
  });
}

//Sign user in using Facebook
export function signInWithFacebook(fbToken,) {
  return new Promise((resolve, reject) => {
      const credential = provider.credential(fbToken);
      auth.signInWithCredential(credential)
          .then((user) => {
              //Get the user object from the realtime database
              database.ref('users').child(user.uid).once('value')
                  .then((snapshot) => {

                      const exists = (snapshot.val() !== null);

                      //if the user exist in the DB, replace the user variable with the returned snapshot
                      if (exists) user = snapshot.val();

                      //if (exists) dispatch({type: t.LOGGED_IN, user});

                      resolve({exists, user});
                  })
                  .catch((error) => reject(error));
          })
          .catch((error) => reject(error));
  });
}


export function checkLoginStatus(callback) {



  auth.onAuthStateChanged((user) => {
      let isLoggedIn = (user !== null);

      if (isLoggedIn) {

          /*
            cap nha thong tin login lan cuoi cung

          */

          //Get the user object from the realtime database
          database.ref('users').child(user.uid).once('value')
              .then((snapshot) => {


                  const exists = (snapshot.val() !== null);

                  //if the user exist in the DB, replace the user variable with the returned snapshot
                  if (exists) user = snapshot.val();
                  //if (exists) dispatch({type: t.LOGGED_IN, user});

                  callback(exists, isLoggedIn);
              })
              .catch((error) => {
                  //unable to get user
                  //dispatch({type: t.LOGGED_OUT});
                  callback(false, false);
              });
      } else {
          //dispatch({type: t.LOGGED_OUT});
          callback(false, isLoggedIn)
      }
  });
}
