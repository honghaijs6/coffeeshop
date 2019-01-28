import React, { Component } from 'react';

// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";

import FeedPage from './feeds/';
import FeedViewPage from './feedview';

import OrderPage from './orders';
import MenuPage from './menu';
import ProductItemPage from './productItem';
import CartPage from './cart';

import MissionPage from './missions/';
import StorePage from './stores/';

import AccountPage from './users/';





class shop extends Component {


    state = {
      tabs:[
        { tab:'feed',icon:'paper',name:'Feeds' },
        { tab:'feedview',icon:'paper',name:'Feeds',hidden:true },

        { tab:'mission',icon:'aperture',name:'Missions' },

        { tab:'order',icon:'cafe',name:'Orders' },
        { tab:'menu',icon:'cafe',name:'Menu', hidden:true },


        { tab:'store',icon:'pin',name:'Stores' },
        { tab:'account',icon:'person',name:'Account' },
      ],
      onTab:'feed',
      tab:{}
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
            this.setState({
              onTab:newState.toTab
            });
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

              <FeedPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />
              <FeedViewPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  {...this.state} />

              <OrderPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />
              <MenuPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />
              <ProductItemPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state }  />
              <CartPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state }  />


              <MissionPage { ...this.state } />
              <StorePage { ...this.state } />
              <AccountPage { ...this.state } />




            </BenTabs>
        );
    }
}
export default shop;
