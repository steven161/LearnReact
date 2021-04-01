import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../LoginScreen2/Button";
import Header from "../LoginScreen2/Header";
import Logo from "../LoginScreen2/Logo";
import Textbox from "../LoginScreen2/Textbox";
import { Ionicons as Icon } from "@expo/vector-icons";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shapeContainer}>
          <View style={styles.shape} />
        </View>

        <View style={styles.logoContainer}>
          <Logo />
        </View>

        <View style={styles.headerContainer}>
          <Header></Header>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.buttonContainer}>
            <Button
              flex={1}
              title="Google"
              color="#EA4234"
              icon={<Icon name="logo-google" size={18} color="white" />}
            ></Button>
            <View width={32} />
            <Button
              flex={1}
              title="Facebook"
              color="#1878F3"
              icon={<Icon name="logo-facebook" size={18} color="white" />}
            ></Button>
          </View>
          <Textbox placeHolder="User Name" />
          <Textbox placeHolder="Email Address"></Textbox>
          <Textbox placeHolder="Password"></Textbox>
          <View height={12} />
          <Button title="Sign Up" color="#01B760"></Button>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.donthaveText}>Don't Have an Account?</Text>
          <View width={8} />
          <Text style={styles.signupText}>Sign In</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  shapeContainer: {
    //flex:1,
    height: 90,
  },
  shape: {
    width: 70,
    height: 100,
    borderRadius: 16,
    marginLeft: 90,
    marginTop: -20,
    transform: [{ rotate: "30deg" }],
    backgroundColor: "#01B760",
  },
  logoContainer: {
    flex: 1.5,
    //backgroundColor:'red',
  },
  headerContainer: {
    height: 80,
    //backgroundColor:'green',
  },
  inputContainer: {
    flex: 5,
    //backgroundColor:"blue"
  },
  buttonContainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  footerContainer: {
    //height: 56,
    //backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32,
  },
  donthaveText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#B7B8BA",
  },
  signupText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5EA9D8",
  },
});
