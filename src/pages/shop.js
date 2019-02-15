import React, { Component } from 'react';


import store from '../redux/store';


// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";


/* TABS : 5 tab items */
import FeedTab from './feedTab/';
import MissionTab from './missionTab/';
import OrderTab from './orderTab';
import StoreTab from './storeTab/';
import AccountTab from './userTab/';



class shop extends Component {

    constructor(props){
      super(props);

      this.state = state = {
        navigation:props.navigation,
        tabs:[
          { tab:'feed',icon:'paper',name:'Feeds' },
          { tab:'mission',icon:'aperture',name:'Missions' },
          { tab:'order',icon:'cafe',name:'Orders' },
          { tab:'store',icon:'pin',name:'Stores' },
          { tab:'account',icon:'person',name:'Account' },
        ],
        onTab:'feed',
        tab:{},
        shopingCart:[],
        userInfo:store.getState().user.userInfo
      }

      this._listenUserInfo()

    }

    _listenUserInfo(){
      this.unsubscribe = store.subscribe(()=>{
        const userInfo = store.getState().user.userInfo;

        this.setState({
          userInfo:userInfo
        });

      })
    }

    componentWillUnmount(){

      this.unsubscribe();

    }


    _onChangeTab(data){
      this.setState({
        onTab:data.tab,
        tab:data
      })
    }

    onStateChange(newState){

       switch (newState.onAction) {
         case 'change_tab' :

            let combineState = Object.assign(this.state,newState);
            combineState.onTab = newState.toTab

            this.setState( combineState );

         break;
         default:

       }

    }
    render() {


        return (
            <BenTabs
              onPress={(data)=>{ this._onChangeTab(data) }}
              onTab={ this.state.onTab }
              data={ this.state.tabs }
            >

              <BenStatusBar/>

              <FeedTab { ...this.state } />
              <MissionTab { ...this.state } />
              <OrderTab { ...this.state } />
              <StoreTab { ...this.state } />
              <AccountTab { ...this.state } />



            </BenTabs>
        );
    }
}
export default shop;
