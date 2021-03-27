import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './Login';
import LoginEatme from './LoginEatme';
import LoginTest from './LoginTest';
import PropsExam from './PropsExam'
import LoginScreen from './LoginScreen'
import * as Font from 'expo-font';


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
    } else {
        return null;
    }
  }
}

