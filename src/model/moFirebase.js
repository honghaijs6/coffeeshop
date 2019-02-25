

import store from '../redux/store';
import {auth, database, provider, config} from "../config/firebase";


class moFire {

  constructor(model){

    this.localData = {
      db:{
        paginate:config.paginate,
        total:0
      }
    }
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




  create(json, onSuccess){

    json.uid = this.generateUUID();

    this.db.child(json.uid).update({...json})
        .then(() => {
            onSuccess(json);
            this._onSuccess('set',json);
        })
        .catch((error) => this._onError(error) );

  }

  update(uid,json,onSuccess){
    this.db.child(uid).update({...json})
        .then(() => {
            onSuccess(json);
            this._onSuccess('change',json)
        })
        .catch((error) => this._onError(error) );
  }

  goto(p,onSuccess){

  }
  next(onSuccess){

  }
  pre(onSuccess){

  }


  deleteMulti(){

  }
  delete(uid,onSuccess){


     this.db.child(uid).remove()
     .then( ()=> {

         this._onSuccess('remove',{
           uid:uid
         });

         onSuccess('success');

      })
      .catch(function(error) {
        onSuccess(error);
      });
  }

  countAll(onSuccess){
    this.db.once("value",(snapshot)=>{
      onSuccess(snapshot.numChildren());
    })
  }

  fetch(field,value,onSuccess){

    this.data = [] ;

    this.countAll((total)=>{

        this.localData.db.total = total;
        const query = this.db
                        .orderByChild(field)
                        .equalTo(value)
                        .limitToLast(config.paginate.max);

        query.once("value",(snapshot)=>{

          snapshot.forEach( (childSnapshot)=> {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            this.data.push(childData);

          });

          this.data = this.data.reverse();
          onSuccess(this.data);
          this._onSuccess('value',this.data);


        });



    });
  }
  
  read(onSuccess){

    this.data = [] ;

    this.countAll((total)=>{

        this.localData.db.total = total;
        const query = this.db
                        .orderByChild("createdAt")
                        /*.equalTo(0)*/
                        .limitToLast(config.paginate.max);

        query.once("value",(snapshot)=>{

          snapshot.forEach( (childSnapshot)=> {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            this.data.push(childData);

          });

          //this.data = this.data.reverse();


          onSuccess(this.data);
          this._onSuccess('value',this.data);

        });



    });

  }

  _onSuccess(type,data){

    switch (type) {
      case 'value':
        store.dispatch({
          type: type +'-'+this.model,
          list:data
        });

      break;

      case 'set':

        this.data.unshift(data);

        this.localData.db.total = this.data.length;

        store.dispatch({
          type: type +'-'+this.model,
          list:this.data
        });

      break ;
      case 'change':

        /*UPDATE DATA*/
        let myData = this.data ;

        myData.map((item,index)=>{
          if(data.uid===item.uid){
            myData[index] = data ;
          }
        });

        store.dispatch({
          type:type+'-'+this.model,
          list:myData
        });


      break ;

      case 'remove':
         const uid = data.uid ;

         this.data.forEach((item,index)=>{
           if(item.uid===uid){
             this.data.splice(index, 1);
           }
         })

         store.dispatch({
           type:type+'-'+this.model,
           list:this.data
         });



      break ;

      default:

      break ;

    }
  }

  _onError(error){
    console.log(error);
  }




}

export default moFire;
