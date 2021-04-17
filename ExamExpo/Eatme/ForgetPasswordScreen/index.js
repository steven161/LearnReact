import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Alert,
} from "react-native";
import GilroyText from "../components/GilroyText";
import Header from "../components/Header";
import Logo from "../components/Logo";
import SelectedButton from "../components/SelectedButton";
import TextBox from "../components/TextBox";
import axios from 'axios'

const url = "https://training.softech.cloud/api/users/forgot-password";

const validateEmail = (text) => {
    //console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isValid: undefined,
    };
  }

  onPressSendEmail = () => {
    const data = {
      email: this.state.email,
    };
    axios.post(url,data)
    .then((result) => {
        console.log(result.data);
        Alert.alert(result.data.message);
      })
      .catch((error) => {
        console.log('Loi = ' + error);
      });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Logo />
          </View>

          <View style={styles.headerContainer}>
            <Header
              title="Password Recovery"
              subTitle="Please enter you email address to recover your password"
            />
          </View>

          <View style={styles.inputContainer}>
              <TextInput />
            <TextBox
              label="Email"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              keyboardType='email-address'  
              icon="check-circle-outline"
              isValid={this.state.isValid}
              onChangeText={(txt) => {
                this.setState({ email: txt });
                let valid = validateEmail(txt);
                this.setState({ isValid: valid });
              }}
             
            />

            <SelectedButton
              disabled={!this.state.isValid}
              title="Send Email"
              style={{ height: 56 }}
              fontSize={16}
              selected={this.state.isValid}
              onPress={this.onPressSendEmail}
            ></SelectedButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 32,
    marginTop: 64,
    height: 60,
    //backgroundColor:"gray",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 25,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
});
