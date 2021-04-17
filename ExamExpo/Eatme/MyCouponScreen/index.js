import React, { Component , useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import SelectedButton from "../components/SelectedButton";
import Coupons from './Coupons'

export default class index extends Component {
   state ={
       status: 'Available',
   }

  render() {
    

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <SelectedButton
            title="Available"
            selected={this.state.status === 'Available'}
            style={{flex: 1, height: 43}}
            fontSize={16}
            onPress={()=>{this.setState({status:'Available'})}}
          />
          <View width={16} />
          <SelectedButton
            title="Used"
            selected={this.state.status === 'Used'}
            style={{flex: 1, height: 43}}
            fontSize={16}
            onPress={()=>{this.setState({status:'Used'})}}
          />
        </View>
        
        <View height={32}/>

        <Coupons status={this.state.status}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
    }
});
