
import styles from '../../style/styles';

import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image 
} from 'react-native';
 
import PopupModal from '../../components/PopupModal';
const iconGif = require('../../../assets/redeem_icon.png')

export default class RedeemModal extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <PopupModal visible={ this.props.visible }>
        <View style={{ alignItems:'center'}}>
            
            <View style={{ alignItems:'center'}}>
                <Image 
                    source={ iconGif }
                    style={{
                        height:170,
                        width:170
                    }}
                />
                <Text style={[styles.font18, styles.green,{ fontFamily:'Roboto'}]}>
                    Woohoo!!  Now, You had have enough points to get 01 free
                </Text>
            </View>
            {/* footer bottom */}
            <TouchableOpacity onPress={ ()=>{ this.props.onAccept() }} style={[styles.btnOK, styles.green,s.p, {width:'100%'}]}>
                <Text style={[styles.white]}> Accept </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{ this.props.onClose() }} style={[styles.btnNoThank,s.p]}>
                <Text style={[styles.green]}>  No Thanks </Text>
            </TouchableOpacity>
        </View>
      </PopupModal>
    );
  }
}

RedeemModal.defaultProps = {
    onAccept:()=>{},
    onClose:()=>{}
}


const s = StyleSheet.create({
    p:{
        marginVertical:10
    }
})