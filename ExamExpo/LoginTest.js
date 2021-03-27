import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green'
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 286,
    height: 90,
  },
  titleLets: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    marginTop: 16,
  },
  titleWelcome: {
    textAlign: "center",
    color: "gray",
    marginTop: 8,
  },
  infoContainer: {
    height: 250,
    //backgroundColor: "red",
    padding: 20,
  },
  input: {
    height: 54,
    backgroundColor: "gray",
    color: "white",
    paddingHorizontal: 8,
    marginTop: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 8,
    height: 54,
    backgroundColor: "pink",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default class LoginTest extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require("./assets/logo-eatme.png")}
                ></Image>
                <Text style={styles.titleLets}>Let's Sign You In</Text>
                <Text style={styles.titleWelcome}>
                  Welcome back, You've been missed!
                </Text>
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username/email"
                  placeholderTextColor="white"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="white"
                  returnKeyType="go"
                  secureTextEntry={true}
                  ref={"txtPassword"}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
