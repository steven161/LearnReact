import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextboxEmail from "../components/TextboxEmail";
import TextBox from "../components/TextBox";
import SwitchButton from "../components/SwitchButton";
import GilroyText from "../components/GilroyText";
import Button from "../components/Button";
import { Ionicons as Icon } from "@expo/vector-icons";
import TextboxPassword from "../components/TextboxPassword";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green'
    //margin:24,
  },
  logoContainer: {
    flex: 1,
    //backgroundColor: "yellow",
    justifyContent: "flex-end",
  },
  headerContainer: {
    //marginTop: 24,
    height: 60,
    //backgroundColor:"gray",
    alignItems: "center",
  },
  inputContainer: {
    flex: 5,
    //backgroundColor:"red",
    marginTop: 16,
  },
  footerContainer: {
    //flex: 0,
    //backgroundColor:"red",
    marginBottom: 12,
  },
});

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaitSignin: false,
      email: "",
      emailValid: undefined,
      password: "",
      passwordValid: undefined,
      secureTextEntry: true,
    };
  }

  onPressSignIn = () => {
    const url = "https://training.softech.cloud/api/users/login";

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({ isWaitSignin: true });

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
        this.setState({ isWaitSignin: false });
        if (json.ok === false) {
          let errorMsg = "";
          json.errors.forEach((error) => {
            errorMsg += error.msg + "\n";
          });
          Alert.alert("Dang nhap khong thanh cong !!!!\n" + errorMsg);
        } else {
          Alert.alert("Ok. Thanh cong. \nUserID = " + json.result[0]._id);
        }
      })
      .catch((error) => {
        this.setState({ isWaitSignin: false });
        console.log("Error when logging : " + error);
        Alert.alert("Loi log in : " + JSON.stringify(error));
      });
  };

  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  validatePassword = (text) => {
    if (text.length < 4) return false;
    else return true;
  };

  onEndEditingEmail = () => {
    let valid = this.validateEmail(this.state.email);
    this.setState({ emailValid: valid });
  };

  onEndEditingPassword = () => {
    let valid = this.validatePassword(this.state.password);
    this.setState({ passwordValid: valid });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Begin: LOGO */}
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          {/* End: LOGO  */}

          {/* ----------------------------------------------------------------------------- */}

          {/* Begin : HEADER */}
          <View style={styles.headerContainer}>
            <Header
              title="Let's Sign You In"
              subTitle="Welcome back, you've been missed"
            />
          </View>
          {/* End: HEADER */}

          {/* ----------------------------------------------------------------------------- */}
          {/* Begin: INPUT */}
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              secureTextEntry="true"
            />
            <TextBox
              label="Email"
              autoCorrect={false}
              clearButtonMode="never"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Please enter your email"
              isValid={this.state.emailValid}
              icon="check-circle-outline"
              onChangeText={(txt) => {
                this.setState({ email: txt });
              }}
              onEndEditing={this.onEndEditingEmail}
            />

            <TextBox
              label="Password"
              autoCapitalize="none"
              secureTextEntry={this.state.secureTextEntry}
              placeholder="Please enter your password"
              isValid={this.state.passwordValid}
              icon={
                this.state.secureTextEntry ? "eye-outline" : "eye-off-outline"
              }
              onChangeText={(txt) => {
                this.setState({ password: txt });
              }}
              onEndEditing={this.onEndEditingPassword}
              onPressIcon={() => {
                let s = !this.state.secureTextEntry;
                this.setState({ secureTextEntry: s });
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SwitchButton title="Save Me"></SwitchButton>
              <GilroyText color="#898B9A" fontStyle="Regular">
                <Text>Forgot password?</Text>
              </GilroyText>
            </View>
            <View height={32} />
            {this.state.isWaitSignin && <ActivityIndicator />}
            <Button
              style={{ backgroundColor: "#FF6C44" }}
              titleColor="white"
              title="Sign In"
              loading={this.state.isWaitSignin}
              onPress={this.onPressSignIn}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: "#898B9A",
                  fontSize: 16,
                  fontFamily: "SVN-Gilroy-Medium",
                }}
              >
                Don't have an account?
              </Text>
              <View width={12} />
              <Text
                style={{
                  color: "#FF6C44",
                  fontSize: 16,
                  fontFamily: "SVN-Gilroy-Bold",
                }}
              >
                Sign up
              </Text>
            </View>
          </View>
          {/* End: INPUT */}

          {/* ----------------------------------------------------------------------------- */}

          {/* Begin: FOOTER */}
          <View style={styles.footerContainer}>
            <Button
              style={{ backgroundColor: "#0064C0" }}
              titleColor="white"
              title="Continue With Facebook"
              icon={<Icon name="logo-facebook" size={18} color="white" />}
            />
            <View height={16} />
            <Button
              style={{ backgroundColor: "#F5F5F8" }}
              titleColor="#898B9A"
              title="Continue With Google"
              image={
                <Image
                  style={{ width: 16, height: 16 }}
                  source={require("../assets/google-icon.png")}
                />
              }
            />
          </View>
          {/* End: FOOTER */}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
