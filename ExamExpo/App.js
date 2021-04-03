import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './Eatme/LoginScreen'
import * as Font from 'expo-font';
import SignupScreen from './Eatme/SignupScreen'
import LoginScreen2 from './BaiTap/LoginScreen2'
import SignupScreen2 from './BaiTap/SignupScreen2'
import OnboardingScreen from './Eatme/OnboardingScreen'
import ForgotPasswordScreen from './BaiTap/ForgotPasswordScreen'
import UseLinearGradient from './BaiTap/UseLinearGradient'
import Weather from './BaiTap/Weather'
import TimeTracking from './BaiTap/TimeTracking'
import ImageFeed from './BaiTap/ImageFeed'
import ImageSlider from './BaiTap/ImageSlider'

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
      return <LoginScreen/>;
      //return <SignupScreen/>;
      //return <OnboardingScreen/>
      //return <ForgotPasswordScreen/>
      //return <UseLinearGradient/>;
      //return <Weather/>
      //return <TimeTracking/>
      //return <ImageFeed/>
      //return <ImageSlider/>
    } else {
        return null;
    }
  }
}

