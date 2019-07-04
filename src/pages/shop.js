/*
MAIN TAB ON SHOP
*/
import moFire from '../model/moFirebase';
import Api from '../model/api';
import USER from '../config/user';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";
import BenLoader from '../components/BenLoader';


/* TABS : 5 tab items */
import FeedTab from './feedTab/';
import MissionTab from './missionTab/';
import OrderTab from './orderTab';
import StoreTab from './storeTab/';
import AccountTab from './userTab/';



class shop extends Component {

    _isMounted = false;
    _timeID = 2000;


    constructor(props){

      super(props);


      this.state = state = {


        socketRes:{},

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
        onTab:'account',
        tab:{},
        userInfo: JSON.stringify(props.user.userInfo) === '{}' ? props.user.tempInfo : props.user.userInfo // get data from reducer

      }


      this.data = {
        categories:[],
        orders:[]
      };

      this._setup() ;

    }


    _setup(){


      this.moCate = new moFire('categories');
      this.moOrder = new Api('orders');
      


    }

    _readOrders(){

      if(this.state.userInfo.id !== 0){
        this.moOrder.set('method',{
          name:'listAll',
          params:'all?creator_id='+this.state.userInfo.id+'&status=lt2'
        })
  
        this.moOrder.fetch((res)=>{
          res = res.data ;
          if(res.name==='success'){
            this.data.orders = res.rows ;
  
            this.setState({onAction:'_readOrders'}) ;
          }
        });
      }
      
    }

    componentDidMount(){

      this._isMounted = true;
      this.setState({loader:true});

      USER.checkLoginStatus();
         

      this.moCate.read((data)=>{

        this.data.categories = data;

        if(this._isMounted){
          this.setState({
            loader:false,
            onAction:'fetch_categories'
          })
        }

      });

      // READ ORDERS
      this._readOrders();

    }

    componentWillReceiveProps(newProps){


      this.setState({
        userInfo: JSON.stringify(newProps.user.userInfo) !== '{}' ? newProps.user.userInfo : newProps.user.tempInfo
      });
      // RECIEW FROM SOCKET
      const {socketData} = newProps ;
      if(socketData.appState==='active'){
        this._readOrders();
      }

    }


    _onChangeTab(data){

      this._isMounted = false;

      this.setState({
        onTab:data.tab,
        tab:data
      });

      if(data.tab==='order'){

        this.moCate.read((data)=>{
          this.setState({
            onAction:'fetch_categories'
          })
        });

        // READ AGAIN ;
        this._readOrders();

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

        //alert(JSON.stringify(this.props.user));


        return (
            <BenTabs

              onPress={(data)=>{ this._onChangeTab(data) }}  
              onTab={ this.state.onTab }
              data={ this.state.tabs }
              notiOrder={ this.data.orders.length }
            >
              <BenLoader visible={this.state.loader} />

              <BenStatusBar/>
          
              

              <OrderTab  data={this.data} { ...this.state } />
              <AccountTab { ...this.state } />
              <FeedTab onPressChangeTab={ (data)=>{ this._onChangeTab(data) } } { ...this.state } />
              <MissionTab { ...this.state } />
              <StoreTab { ...this.state } />




            </BenTabs>
        );
    }
}

function mapStateToProps(state){
  return {
    user:state.user,
    socketData:state.socketData
  }
}
export default  connect(mapStateToProps)(shop) ;
