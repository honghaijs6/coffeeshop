
import {auth, database, provider} from "../config/firebase";
import {AsyncStorage} from 'react-native';


class moFire {

  constructor(model){

    this.model = model ;
    this.state = {}
    this.data = []


    this._setup();
  }

  _setup(){

    this.db = database.ref().child(this.model);

  }

  generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
  }


  _onError(error){
    console.log(error);
  }

  _onSuccess(json){
    console.log(json);
  }

  create(json, onSuccess){

    json.uid = this.generateUUID();

    this.db.child(json.uid).update({...json})
        .then(() => {
            onSuccess(json);
            this._onSuccess(json)
        })
        .catch((error) => this._onError(error) );
    
  }

  update(uid,json){
    return new Promise((resolve, reject) => {

        this.db.child(uid).update({...json})
            .then(() => {
                //dispatch({type: t.LOGGED_IN, user});
                resolve(json)
            })
            .catch((error) => reject({message: error}));
    });
  }
  delete(){

  }
  read(){

  }

}

export default moFire;
