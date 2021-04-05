import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, Image} from 'react-native';
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
import StarAndNumber from './Eatme/components/StarAndNumber';
import Duration from './Eatme/components/Duration'
import FreeShipping from './Eatme/components/FreeShipping';
import Sizes from './Eatme/components/Sizes';
import SmallRestaurant from './Eatme/components/SmallRestaurant';
import Rating from './Eatme/components/Rating';
import Quantity from './Eatme/components/Quantity';
import BuyNow from './Eatme/components/BuyNow';
import FoodDetails from './Eatme/FoodDetails'

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
      return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <View  style={{padding:0, minWidth: 414, minHeight: Platform.OS === 'web' ? 812 : null}}>
        {/* 
          <LoginScreen/>;
          <SignupScreen/>;
          <OnboardingScreen/>
          <ForgotPasswordScreen/>
          <UseLinearGradient/>;
          <Weather/>
          <TimeTracking/>
          <ImageFeed/>
          <ImageSlider/>
          <FoodDetails/>
           */}
           
           <UseLinearGradient/>

        </View>
      </SafeAreaView>
      )
    } else {
        return null;
    }
  }
}

