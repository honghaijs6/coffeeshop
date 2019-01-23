import React, { Component } from 'react';

// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";

import FeedPage from './feeds/';
import OrderPage from './orders/';
import MissionPage from './missions/';
import StorePage from './stores/';

import AccountPage from './users/';





class shop extends Component {


    state = {
      tabs:[
        { tab:'feed',icon:'paper',name:'Feeds' },
        { tab:'feedview',icon:'paper',name:'Feed View', hidden:true },

        { tab:'order',icon:'cafe',name:'Orders' },
        { tab:'mission',icon:'aperture',name:'Missions' },
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

    switchTab(){



      switch(this.state.onTab){
        case 'feed':
          return (<FeedPage { ...this.state } />)
        break;
        case 'order':
          return (<OrderPage { ...this.state } />)
        break;
        case 'mission':
          return (<MissionPage { ...this.state } />)
        break;
        case 'store':
          return (<StorePage { ...this.state } />)
        break;
        case 'account':
          return (<AccountPage { ...this.state } />)
        break;

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

              { /* this.switchTab() */}

              <FeedPage { ...this.state } />
              <OrderPage { ...this.state } />
              <MissionPage { ...this.state } />
              <StorePage { ...this.state } />
              <AccountPage { ...this.state } />

            </BenTabs>
        );
    }
}
export default shop;
