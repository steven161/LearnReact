import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import GilroyText from "../components/GilroyText";
import Logo from "../components/Logo";
import SelectedButton from "../components/SelectedButton";
import Thankyou from "./Thankyou";

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.titleContainer}>
          <GilroyText
            fontStyle="Bold"
            style={{ fontSize: 24, color: "#111A2C" }}
          >
            Thank you!
          </GilroyText>
          <View height={16} />
          <GilroyText style={{ fontSize: 14, color: "#525C67" }}>
            You successfully review the rider. We will be better.
          </GilroyText>
        </View>

        <Thankyou style={{flex: 3}}/>

        <View style={styles.buttonContainer}>
            <SelectedButton 
                style={{height: 56}}
                title='Go back'
                fontSize={16}
                onPress={this.props.backScreen}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green',
  },
  titleContainer: {
      alignItems: "center",
      //backgroundColor: 'red',
      marginTop: 74,
  },
  buttonContainer: {
      //flex: 1,
      justifyContent:'flex-end',
      marginBottom: 16,
  }
});
