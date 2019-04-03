/*
MAIN TAB ON SHOP
*/

import React, { Component } from 'react';

// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";


import moFire from '../model/moFirebase';


import BenLoader from '../components/BenLoader';

/* TABS : 5 tab items */
import FeedTab from './feedTab/';
import MissionTab from './missionTab/';
import OrderTab from './orderTab';
import StoreTab from './storeTab/';
import AccountTab from './userTab/';



class shop extends Component {

    _isMounted = false;

    constructor(props){
      super(props);

      this.store = props.screenProps;

      this.state = state = {
        loader:false,
        onAction:'',
        navigation:props.navigation,
        tabs:[
          { tab:'feed',icon:'paper',name:'Feeds' },
          { tab:'mission',icon:'aperture',name:'Missions' },
          { tab:'order',icon:'cafe',name:'Orders' },
          { tab:'store',icon:'pin',name:'Stores' },
          { tab:'account',icon:'person',name:'Account' },
        ],
        onTab:'order',
        tab:{},
        userInfo:props.screenProps.getState().user.userInfo,


      }

      this.data = {
        categories:[]
      };

      this._listenUserInfo();
      this._setup() ;



    }


    _setup(){
      this.moCate = new moFire('categories');
    }

    _listenUserInfo(){
      this.unsubscribe = this.store.subscribe(()=>{
        const userInfo = this.store.getState().user.userInfo;

        this.setState({
          userInfo:userInfo
        });

      })
    }

    componentWillUnmount(){
      this._isMounted = false;
      this.unsubscribe();

    }

    componentDidMount(){

      this._isMounted = true;

      this.setState({loader:true})
      this.moCate.read((data)=>{

        this.data.categories = data;

        if(this._isMounted){
          this.setState({
            loader:false,
            onAction:'fetch_categories'
          })
        }

      })
    }


    _onChangeTab(data){

      this._isMounted = false;
      this.unsubscribe();

      this.setState({
        onTab:data.tab,
        tab:data
      });

      if(data.tab==='order'){


        this.moCate.read((data)=>{


          this.setState({
            onAction:'fetch_categories'
          })



        })
      }

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
              <BenLoader visible={this.state.loader} />
              <BenStatusBar/>

              <FeedTab onPressChangeTab={ (data)=>{ this._onChangeTab(data) } } { ...this.state } />
              <MissionTab { ...this.state } />
              <OrderTab data={this.data} { ...this.state } />
              <StoreTab { ...this.state } />
              <AccountTab { ...this.state } />



            </BenTabs>
        );
    }
}
export default shop;
