import React, { Component } from 'react'
import { View,Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'

export default class Inputs extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({email: text})
    }

    handlePassword = (text) => {
        this.setState({password: text})
    }

    login = (email, password) => {
        alert('Email:' + email + ' Password: ' + password)
    }

    render() {
        return (
            <View style={styles.container}>
                   <TextInput 
                        style={styles.input}
                        underlineColorAndroid = 'transparent'
                        placeholder='Email1'
                        placeholderTextColor='#9a73ef'
                        editable={true}
                        autoCapitalize='none'
                        onChangeText={this.handleEmail}
                   /> 

                    <TextInput 
                        style={styles.input}
                        underlineColorAndroid = 'transparent'
                        placeholder='Passord'
                        placeholderTextColor='#9a73ef'
                        autoCapitalize='none'
                        onChangeText={this.handlePassword}
                   /> 

                   <TouchableOpacity 
                        style={styles.submitButton}
                        onPress={ () => {this.login(this.state.email, this.state.password)}}
                   >
                       <Text style={styles.submitButtonText}>Submit</Text>
                   </TouchableOpacity>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    input: {
        borderColor: '#7a42f4',
        height:56,
        padding:10,
        margin:10,
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding:10,
        margin:10,
        height:56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: 'white',
    }
});