import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
import GilroyText from "../components/GilroyText";
import SelectedButton from "../components/SelectedButton";
import Orders from './Orders'
import LatestOrders from './LatestOrders'

export default class index extends Component {
    state ={
        selectButton: true,
    };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigaBar}>
          <Text>MY ORDERS</Text>
        </View>
        <View style={styles.buttonContainer}>
          <SelectedButton 
            style={{flex: 1, height: 43}}
            title='History'
            selected={this.state.selectButton}
            //height={43}
            fontSize={16}

            onPress={()=>{
                this.setState({selectButton: true});
              }}
          />
          <View width={16} />
          <SelectedButton 
            style={{flex: 1}}
            title='Upcoming'
            selected={!this.state.selectButton}
            height={43}
            fontSize={16}

            onPress={()=>{
                this.setState({selectButton: false});
              }}
          />
        </View>

        <Orders />

        <GilroyText style={{fontSize:14, color:'#111A2C', margin: 24, marginBottom: 16}} fontStyle='SemiBold'><Text>Lastest Orders</Text></GilroyText>

        <LatestOrders />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      
  },
  navigaBar: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "green",
  },
  buttonContainer: {
      flexDirection: "row",
      //marginHorizontal: 24,
      marginBottom: 32,
  }
 
});
