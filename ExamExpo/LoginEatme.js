import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  // LOGO
  logoContainer: {
    flex: 1.5,
    //backgroundColor:'green',
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    //width:250,
    //height: 80,
    //resizeMode: "stretch",
  },
  letsText: {
    fontSize: 24,
    marginTop: 16,
    fontWeight: "700",
  },
  welcomeText: {
    color: "gray",
    marginTop: 16,
  },
  passwordText: {
    color: "gray",
    marginTop: 16,
  },
  // INPUT
  inputContainer: {
    flex: 1.5,
    //backgroundColor: "white",
  },
  emailpasswordInputContainer: {
    height: 60,
    backgroundColor: "#F5F5F8",
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 8,
  },
  emailText: {
    color: "gray",
  },
  textLeft: {
    flex: 1,
    alignItems: "flex-start",
    color: "gray",
  },
  iconRight: {
    width: 32,
    height: 32,
    alignItems: "flex-end",
  },

  OtherInputContainer: {
    height: 60,
    //backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
  },
  savemeText: {
    color: "gray",
    marginLeft: 8,
  },
  forgotPasswordText: {
    color: "gray",
  },
  savemeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  forgotpasssContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  // SIGN IN
  signinContainer: {
    flex: 1,
    //backgroundColor: "green",
    marginTop: 32,
  },
  signinButton: {
    height: 54,
    backgroundColor: "#FF6C45",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signinText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    justifyContent: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  donthaveText: {
    color: "gray",
    fontSize: 16,
    marginRight: 8,
  },
  signupText: {
    color: "#FF6C45",
    fontSize: 16,
    fontWeight: "700",
  },
  // SIGN IN WITH
  sighinWithContainer: {
    flex: 1,
    //backgroundColor: "gray",
  },
  facebookContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 54,
    backgroundColor: "#0164C0",
    borderRadius: 8,
  },
  googleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 54,
    backgroundColor: "#F5F5F8",
    borderRadius: 8,
    marginTop: 8,
  },
  facebookIcon: {
    marginRight: 8,
  },
  googleIcon: {
    marginRight: 8,
  },
  continuewithfacebookText: {
    color: "white",
  },
  continuewithgoogleText: {
    //color: "gray",
  },
});

export default class LoginEatme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      isShowPassword: false,
    };
  }

  handleOnPressSaveme = () => {
    let s = this.state.selected;
    s = !s;
    this.setState({ selected: s });
  };

  handleOnPressShowPassword = () => {
    let s = this.state.isShowPassword;
    s = !s;
    this.setState({ isShowPassword: s });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("./assets/logo-eatme.png")}
          ></Image>
          <Text style={styles.letsText}>Let's Sign You In</Text>
          <Text style={styles.welcomeText}>
            Welcome back, you've been missed!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.emailText}>Email</Text>
          <View style={styles.emailpasswordInputContainer}>
            <TextInput
              style={styles.textLeft}
              placeholder="Enter username/email"
              placeholderTextColor="gray"
              keyboardType="email-address"
            />
            <Icon
              style={styles.iconRight}
              name="check-circle-outline"
              size={32}
              color="gray"
            ></Icon>
          </View>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.emailpasswordInputContainer}>
            <TextInput
              style={styles.textLeft}
              placeholder="Enter password"
              placeholderTextColor="gray"
              secureTextEntry={true}
            />
            <Icon
              style={styles.iconRight}
              name={
                this.state.isShowPassword ? "eye-outline" : "eye-off-outline"
              }
              size={32}
              color={this.state.isShowPassword ? "green" : "gray"}
              onPress={this.handleOnPressShowPassword}
            ></Icon>
          </View>
          <View style={styles.OtherInputContainer}>
            <View style={styles.savemeContainer}>
              <Icon
                name={
                  this.state.selected
                    ? "toggle-switch-outline"
                    : "toggle-switch-off-outline"
                }
                size={48}
                color={this.state.selected ? "gray" : "green"}
                onPress={this.handleOnPressSaveme}
              ></Icon>
              <Text style={styles.savemeText}>Save Me</Text>
            </View>
            <View style={styles.forgotpasssContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </View>
        </View>
        <View style={styles.signinContainer}>
          <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.donthaveText}>Don't have account?</Text>
            <Text style={styles.signupText}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.sighinWithContainer}>
          <TouchableOpacity style={styles.facebookContainer}>
            <Icon
              style={styles.facebookIcon}
              name="facebook"
              size={32}
              color="white"
            />
            <Text style={styles.continuewithfacebookText}>
              Continue With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleContainer}>
            <Icon style={styles.googleIcon} name="google" size={32} />
            <Text style={styles.continuewithgoogleText}>
              Continue With Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
