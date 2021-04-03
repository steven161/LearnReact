import React, { Component } from 'react'
import {Text, View,Image, StyleSheet, SafeAreaView} from 'react-native'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Textbox from '../components/Textbox'
import SwitchButton from '../components/SwitchButton'
import GilroyText from '../components/GilroyText'
import Button from '../components/Button'
import {Ionicons as Icon} from '@expo/vector-icons'


const styles = StyleSheet.create({
    container: { 
        flex: 1,
        //backgroundColor: 'green'
        margin:24,
    },
    logoContainer:{
        flex: 1,
        //backgroundColor: "yellow",
        justifyContent: 'flex-end',
    },
    headerContainer:{
        marginTop: 24,
        height: 60,
        //backgroundColor:"gray",
        alignItems: 'center',
    },
    inputContainer: {
        flex: 3,
        //backgroundColor:"red",
        marginTop:32,
    },
    footerContainer: {
        flex: 0,
        //backgroundColor:"red",
        marginBottom: 12,
    }

});

export default class index extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* Begin: LOGO */}
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>
                {/* End: LOGO  */}

                {/* ----------------------------------------------------------------------------- */}

                {/* Begin : HEADER */}
                <View style={styles.headerContainer}>
                    <Header title="Let's Sign You In" subTitle="Welcome back, you've been missed"/>
                </View>
                {/* End: HEADER */}

                {/* ----------------------------------------------------------------------------- */}

                {/* Begin: INPUT */}
                <View style={styles.inputContainer}>
                    <Textbox label='Email' placeholder='Please enter your email' icon='check-circle-outline' ></Textbox>
                    <Textbox label='Password' placeholder='Please enter your password' icon='eye-outline' ></Textbox>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                        <SwitchButton title='Save Me'></SwitchButton>
                        <GilroyText color='#898B9A' fontStyle='Regular'><Text>Forgot password?</Text></GilroyText>
                    </View>
                    <View height={32}/>
                    <Button style={{backgroundColor:'#FF6C44'}} titleColor='white' title='Sign In'/>
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop: 12,}}>
                        <Text style={{color:'#898B9A',fontSize:16,fontFamily: 'SVN-Gilroy-Medium',}}>Don't have an account?</Text>
                        <View width={12}/>
                        <Text style={{color:'#FF6C44',fontSize:16,fontFamily: 'SVN-Gilroy-Bold',}}>Sign up</Text>
                    </View>
                </View>
                {/* End: INPUT */}

                {/* ----------------------------------------------------------------------------- */}

                {/* Begin: FOOTER */}
                <View style={styles.footerContainer}>
                    <Button style={{backgroundColor:'#0064C0'}} titleColor='white' title='Continue With Facebook' icon={<Icon name='logo-facebook' size={18} color='white'/>}/>
                    <View height={16}/>
                    <Button style={{backgroundColor:'#F5F5F8'}} titleColor='#898B9A' title='Continue With Google' image={<Image style={{width:16, height:16}} source={require('../assets/google-icon.png')}/>}/>
                </View>
                {/* End: FOOTER */}

            </SafeAreaView>
        )
    }
}
