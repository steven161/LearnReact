import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  //-- HEADER --
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  logoContainer: {
    flex: 1.5,
    backgroundColor: "#F4F4F8",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 286,
    height: 90,
    //backgroundColor: "white",
    //borderRadius: 16,
  },

  //-- INPUT  --
  inputContainer: {
    flex: 3,
    backgroundColor: "pink",
    backgroundColor: "#F4F4F8",
    padding: 16,
  },
  
  emailContainer: {
    //flex:1,
    height: 60,
    //backgroundColor:'green',
    marginTop: 12,
    flexDirection: "row",
  },
  passwordContainer: {
    //flex:1,
    height: 60,
    //backgroundColor:'green',
    marginTop: 12,
    flexDirection: "row",
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  input: {
    height: 60,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: 12
  },
  forgotPasswordText: {
    color: '#2980b9'
  },

  //-- FOOTER --
  footerontainer: {
    //flex:1,
    height: 120,
    backgroundColor: "#F4F4F8",
    padding: 16
  },

  

  loginButton: {
    height: 54,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  loginText :{
      fontSize: 28,
      fontWeight:'700',
      color: 'white'
  },
  signupContainer:{
      alignItems: 'center',
      marginTop: 12,
  },
  signupText : {
      color:'#2980b9'
  }
  
});
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("./assets/logo-eatme.png")}
          ></Image>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.emailContainer}>
            <View style={styles.icon}>
              <Icon name="email-outline" size={32} color="#7f8c8d" />
            </View>
            <View style={styles.input}>
              <Text>Enter you email</Text>
            </View>
          </View>
          <View style={styles.passwordContainer}>
            <View style={styles.icon}>
              <Icon name="lock-outline" size={32} color="#7f8c8d" />
            </View>
            <View style={styles.input}>
              <Text>Enter you password</Text>
            </View>
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
          </View>
        </View>
        <View style={styles.footerontainer}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
          <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Haven't account? Sign up</Text>
          </View>
        </View>
      </View>
    );
  }
}
