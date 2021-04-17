import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextBox from '../components/TextBox'
import { Ionicons as Icon } from "@expo/vector-icons";
import TextboxEmail from "../components/TextboxEmail";
import TextboxPassword from "../components/TextboxPassword";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaitingSignup: false,
      email: "",
      username: "",
      password: "",
    };
  }


  onPressSignup = () => {
    const url = "https://training.softech.cloud/api/users/register";
    const data = {
      email: this.state.email,
      fullname: this.state.username,
      password: this.state.password,
    };

    this.setState({ isWaitingSignup: true });

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        this.setState({ isWaitingSignup: false });
        //Alert.alert('json = ' + JSON.stringify(json));
        //Alert.alert('json[ok] = ' + json['ok']);
        if(json.ok === undefined || json.ok === false){
            let strError = ''
            json['errors'].forEach((error)=>{
                strError += error.msg + '\n';
            });

            Alert.alert(strError);
        } 
        else if (json.ok === true){
            Alert.alert('Dang ky thanh cong: ' + JSON.stringify(json.result))
        } else {
            Alert.alert('unknown error : ' + JSON.stringify(json));
        }
       
    })
    .catch((error) => {
        this.setState({ isWaitingSignup: false });
        console.log('Error Sign up : ' + error);
        Alert.alert("Error Sign up")
    });

  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Begin : LOGO */}
        <View style={styles.logoContainer}>
          <Logo></Logo>
        </View>
        {/* End: LOGO */}
        {/* ------------------------------------------------------------------- */}

        {/* Begin : HEADER */}
        <View style={styles.headerContainer}>
          <Header
            title="Getting Started"
            subTitle="Create an account to continue!"
          />
        </View>
        {/* End: HEADER */}
        {/* ------------------------------------------------------------------- */}

        {/* Begin : INPUT */}
        <View style={styles.inputContainer}>
          <TextInput 
            autoCapitalize='none'
            secureTextEntry='true'
            keyboardType='email-address'
          />
          <TextBox
            label="Email"
            autoCapitalize='none'
            keyboardType='email-address'
            placeholder="arman@gmail.com"
            icon="check-circle-outline"
            onChangeText = {(txt) => {this.setState({email: txt})}}
          />
           
          <TextBox
            label="Username"
            autoCapitalize='none'
            placeholder="Please enter your name"
            icon="check-circle-outline"
            onChangeText = {(txt) => {this.setState({username: txt})}}
          />

          <TextBox
            label="Password"
            autoCapitalize='none'
            secureTextEntry='true'
            placeholder="Please enter your password"
            icon="eye-outline"
            onChangeText = {(txt) => {this.setState({password: txt})}}
          />
          <View height={8} />
          <Button color="#FF6C44" title="Sign Up" titleColor="white"></Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <Text
              style={{
                color: "#898B9A",
                fontSize: 16,
                fontFamily: "SVN-Gilroy-Medium",
              }}
            >
              Already have an account?
            </Text>
            <View width={8} />
            <TouchableOpacity onPress={this.onPressSignup}>
              <Text
                style={{
                  color: "#FF6C44",
                  fontSize: 16,
                  fontFamily: "SVN-Gilroy-Bold",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            { this.state.isWaitingSignup && <ActivityIndicator />}
          </View>
        </View>
        {/* End: INPUT */}
        {/* ------------------------------------------------------------------- */}

        {/* Begin: FOOTER */}
        <View style={styles.footerContainer}>
          <Button
            style={{ backgroundColor: "#0064C0" }}
            title="Continue With Facebook"
            titleColor="white"
            icon={<Icon name="logo-facebook" size={18} color="white" />}
          ></Button>
          <View height={16} />
          <Button
            style={{ backgroundColor: "#F5F5F8" }}
            title="Continue With Google"
            titleColor="#898B9A"
            image={
              <Image
                style={{ width: 16, height: 16 }}
                source={require("../assets/google-icon.png")}
              />
            }
          ></Button>
        </View>
        {/* End: FOOTER */}
        {/* ------------------------------------------------------------------- */}
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    height: 100,
    //backgroundColor:'red',
  },
  headerContainer: {
    height: 60,
    //backgroundColor: 'green',
  },
  inputContainer: {
    flex: 3,
    //backgroundColor: 'blue',
  },
  footerContainer: {
    flex: 1,
    //backgroundColor: 'yellow',
  },
});
