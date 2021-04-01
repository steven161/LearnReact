import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import Header from './Header'
import Logo from './Logo'
import Textbox from './Textbox'

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.shapeContainer}>
                     <View style={styles.shape}/>  
                </View>

                <View style={styles.logoContainer}>
                    <Logo></Logo>
                </View>

                <View style={styles.headerContainer}>
                    <Header></Header>
                </View>

                <View style={styles.inputContainer}>
                    <Textbox placeHolder="Email Address"></Textbox>
                    <Textbox placeHolder="Password"></Textbox>
                    <Button title="Login" color="01B760"></Button>
                    
                    <View style={styles.forgotContainer}>
                        <Text style={styles.forgotText}>Forgot Password?</Text> 
                    </View>
                    
                    <View style={styles.donthaveContainer}>
                        <Text style={styles.donthaveText}>Don't Have an Account?</Text>
                        <View width={8}/>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
    },
    shapeContainer: {
        //flex:1,
        height:90,
    },
    shape: {
        width: 70,
        height:100,
        borderRadius:16,
        marginLeft: 90,
        marginTop:-20,
        transform: [{ rotate: "30deg" }],
        backgroundColor:'#01B760'
    },
    logoContainer: {
        flex:1,
        //backgroundColor:'red',
    },
    headerContainer : {
        height: 80,
        //backgroundColor:'green',
    },
    inputContainer : {
        flex:5,
        //backgroundColor:"blue"
    },
    forgotContainer: {
        flexDirection:'row',
        justifyContent:'center',
    },
    forgotText: {
        color: '#5EA9D8',
        fontSize: 16,
    },
    donthaveContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:32
    },
    donthaveText: {
        fontSize:18, 
        fontWeight:"600", 
        color:'#B7B8BA'
    },
    signupText : {
        fontSize:18, 
        fontWeight:"600", 
        color:'#5EA9D8'
    }

});
