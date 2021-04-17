import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, Image} from 'react-native';
import LoginScreen from './Eatme/LoginScreen'
import SignupScreen from './Eatme/SignupScreen'
import ChangePasswordScreen from './Eatme/ChangePasswordScreen'
import OnboardingScreen from './Eatme/OnboardingScreen'
import FoodDetails from './Eatme/FoodDetails'
import HomeScreen from './Eatme/HomeScreen'
import MyOrderScreen from './Eatme/MyOrderScreen'
import MyCouponScreen from './Eatme/MyCouponScreen'
import MyAccountEditScreen from './Eatme/MyAccountEditScreen'
import SettingsScreen from './Eatme/SettingsScreen'
import RiderReviewScreen from './Eatme/RiderReviewScreen'
import ForgetPasswordScreen from './Eatme/ForgetPasswordScreen'

//---------------------------------------------------//
import UseMap from './BaiTap/Example/UseMap'
import UseAxios from './BaiTap/Example/UseAxios';



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
        <View  style={{padding:16, minWidth: 414, minHeight: Platform.OS === 'web' ? 812 : null}}>
       
          
           {/* <UseLinearGradient/> */}
           {/* <HandlingTextInput/> */}
           {/* <LifeCycle/> */}
           {/* <MemoryGame/> */}
           {/* <Menu/> */}
           {/* <ImageSlider/> */}
           {/* <ImageFeed/> */}
           {/* <TimeTracking/> */}
           {/* <Weather/> */}
           {/* <TestImageBackground/> */}
           {/* <StatusBarExam /> */}
           {/* <UseScrollView /> */}
           {/* <FlatListBasic /> */}
           {/* <FlatListSimple /> */}
           {/* <NetworkingExample /> */}
           {/* <UseMap /> */}
           {/* <UseAxios /> */}

           {/* <LoginScreen/> */}
          {/* <SignupScreen/> */}
          {/* <OnboardingScreen/> */}
          {/* <FoodDetails/> */}
           {/* <HomeScreen /> */}

           {/* <MyOrderScreen /> */}
           {/* <MyCouponScreen/> */}
           
          {/* <MyAccountEditScreen/> */}
          {/* <SettingsScreen /> */}
          {/* <ChangePasswordScreen/>  */}
          {/* <ForgetPasswordScreen /> */}
          <RiderReviewScreen />
          
          

        </View>
      </SafeAreaView>
      )
    } else {
        return null;
    }
  }
}

