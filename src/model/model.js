import store from '../redux/store';
import { AsyncStorage } from "react-native"



class Model {

  constructor(strModel){
    this.strModel = strModel || 'none';
    this.data = [];

    this.state = {}

  }



  /* HOW */
  /* add localdata befor post server */
  _setStoreData(list){

    this.data = list ;
    /*try{
      await AsyncStorage.setItem(this.model, JSON.stringify(list));
    }catch(err){
      console.log(err);
    }*/
    this._whereDataChange();

  }
  _getStoreData(){
    return this.data ;
    /*try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }*/
  }
  _removeStoreData(){
    this.data = [];
  }

  addDataStore(json){

    const baseData = store.getState()[this.strModel]['list'];
    this.data = baseData;
    this.data.push(json);
    this._setStoreData(this.data);
  }
  removeItemDataStore(id){
    let list = this._getStoreData();
    list = list.filter((item) => {
        return parseInt(item.id) !== parseInt(id)
    });

    this._setStoreData(list);


  }
  updateItemDataStore(id,data){
    let list = this._getStoreData();

    list.map((item,index)=>{

        if(parseInt(item.id) === parseInt(id)){
           list[index] = idata;
        }
      });

    this._setStoreData(list);

  }


  /* END HOW */
  /* WHERE */
  _whereDataChange(){
    store.dispatch({
      type:'reset-orders',
      list:this.data
    });
  }

}

export default Model;
