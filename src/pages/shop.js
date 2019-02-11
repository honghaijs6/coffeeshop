import React, { Component } from 'react';

// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";


import FeedTab from './feeds/';
import MissionTab from './missions/';
import OrderTab from './orders';
import StoreTab from './stores/';
import AccountTab from './users/';


import MenuTab from './menu';

import ProductItemPage from './productItem';
import CartPage from './cart';

import DeliveryPage from './delivery';
import CheckOutPage from './checkout';








import store from '../redux/store';


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


              {/*<MenuTab onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />


              <ProductItemPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state }  />
              <CartPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state }  />
              <DeliveryPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  { ...this.state }  />
              <CheckOutPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  { ...this.state } />*/}







            </BenTabs>
        );
    }
}
export default shop;
