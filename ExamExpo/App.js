import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen'
import * as Font from 'expo-font';
import List from './Examples/List'
import Inputs from './Examples/Inputs'
import ScrollViewExample from './Examples/ScrollViewExample';
import SignupScreen from './SignupScreen'
import LoginScreen2 from './BaiTap/LoginScreen2'
import SignupScreen2 from './BaiTap/SignupScreen2'
import OnboardingScreen from './OnboardingScreen'
import ForgotPasswordScreen from './BaiTap/ForgotPasswordScreen'
import UseLinearGradient from './BaiTap/UseLinearGradient'


export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        fontsLoaded: false,
      };
  }

  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });

    this.setState({fontsLoaded: true});
  }

  componentDidMount(){
    this.loadFonts();
  }

  render() {
    if(this.state.fontsLoaded){
      //return <LoginScreen/>;
      //return <SignupScreen/>;
      //return <OnboardingScreen/>
      //return <ForgotPasswordScreen/>
      return <UseLinearGradient/>;
    } else {
        return null;
    }
  }
}

