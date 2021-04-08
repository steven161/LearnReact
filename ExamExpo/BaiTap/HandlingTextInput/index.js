import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : 'username',
            password : 'password',
        };
    }

    handleButtonPress = (x) => () => {
        alert('handleButtonPress: ' + x);
    };

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        autoCapitalize='words'
        autoCorrect={false}
        autoFocus={true}
        clearButtonMode='always'
        keyboardType='default'
        keyboardAppearance='dark'
        placeholder='Enter your name'
        placeholderTextColor='blue'
        underlineColorAndroid='transparent'
        style={styles.textInput} 
        onEndEditing={()=>{
            //alert('End Editing');
        }}
        onChangeText={(text)=>{
            this.setState({username: text});
        }}/>
        <View height={16}/>
        <TextInput 
        secureTextEntry={true}
        underlineColorAndroid='transparent'
        style={styles.textInput} 
        onChangeText={(text)=>{
            this.setState({password: text});
        }}/>

        <Button title="Click Me" onPress={this.handleButtonPress(this.state.username)}/>
        <Text>Text Input: {this.state.username} - {this.state.password} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 24,
  },
  textInput: {
    height: 56,
    backgroundColor: "#bdc3c7",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
