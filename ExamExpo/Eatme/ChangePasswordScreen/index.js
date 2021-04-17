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

const url = 'https://training.softech.cloud/api/users/change-password';
const user_email = 'test1@gmail.com';
const user_pwd = '1234';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPassword:'',
      newPassword: "",
      confirmPassword: "",
    };
  }

  onPressResetPassword = () => {
    const data = {
      email: user_email,
      password: this.state.curPassword,
      newPassword: this.state.newPassword,
      isValid: undefined,
    };

    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(data),
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if(json.ok === true){
        Alert.alert('Change Password OK')
      } else {
        Alert.alert('Cannot change Password');
      }
    })
    .catch((error) => {
        console.log('Error: onPressResetPassword : ' + error);
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
              title="Change Your Password"
              subTitle="At least 9 characters, with uppercase and lowercase letters"
            />
          </View>

          <View style={styles.inputContainer}>

          <TextBox
              label="Current Password"
              autoCapitalize='none'
              autoCorrect={false}
              autoFocus
              icon=""
              onChangeText={(txt) => {
                this.setState({curPassword: txt});
              }}
            />

            <TextBox
              label="New Password"
              autoCapitalize='none'
              autoCorrect={false}
              icon="check-circle-outline"
              isValid={this.state.isValid}
              onChangeText={(txt) => {
                this.setState({newPassword: txt});
              }}
              onEndEditing={() => {
                let valid = (this.state.newPassword === this.state.confirmPassword);
               this.setState({isValid: valid});
             }}
            />
            
            <TextBox
              label="Confirm New Password"
              autoCapitalize='none'
              autoCorrect={false}
              icon="check-circle-outline"
              isValid={this.state.isValid}
              onChangeText={(txt) => {
                this.setState({confirmPassword: txt});
              }}
              onEndEditing={() => {
                 let valid = (this.state.newPassword === this.state.confirmPassword);
                this.setState({isValid: valid});
              }}
            />
          </View>

          <View style={styles.footerContainer}>
            <SelectedButton
              disabled={!this.state.isValid}
              title="Change Password"
              style={{height:56}}
              fontSize={16}
              selected={this.state.isValid}
              
              onPress={this.onPressResetPassword}
              enable
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
