import React, { Component } from 'react';

// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";

import FeedPage from './feeds/';
import FeedViewPage from './feedview';

import OrderPage from './orders/';
import MissionPage from './missions/';
import StorePage from './stores/';

import AccountPage from './users/';





class shop extends Component {


    state = {
      tabs:[
        { tab:'feed',icon:'paper',name:'Feeds' },


        { tab:'mission',icon:'aperture',name:'Missions' },
        { tab:'order',icon:'cafe',name:'Orders' },
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
              <OrderPage { ...this.state } />
              <MissionPage { ...this.state } />
              <StorePage { ...this.state } />
              <AccountPage { ...this.state } />

                <FeedViewPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  {...this.state} />



            </BenTabs>
        );
    }
}
export default shop;
