import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import Header  from '../LoginScreen/Header'
import Logo from '../LoginScreen/Logo'
import Textbox from '../LoginScreen/Textbox'
import Button from '../LoginScreen/Button'
import {Ionicons as Icon} from '@expo/vector-icons'

export default class index extends Component {
    render() {
        return (
            
            <SafeAreaView style={styles.container}>
                {/* Begin : LOGO */}
                <View style={styles.logoContainer}>
                    <Logo></Logo>
                </View>
                {/* End: LOGO */}
                {/* ------------------------------------------------------------------- */}

                {/* Begin : HEADER */}
                <View style={styles.headerContainer}>
                    <Header title="Getting Started" subTitle="Create an account to continue!"/>
                </View>
                {/* End: HEADER */}
                {/* ------------------------------------------------------------------- */}

                {/* Begin : INPUT */}
                <View style={styles.inputContainer}>
                    <Textbox label="Email" placeholder="arman@gmail.com" icon="cancel"></Textbox>
                    <Textbox label="Username" placeholder="Please enter your name" icon="check-circle-outline"></Textbox>
                    <Textbox label="Password" placeholder="Please enter your password" icon="eye-outline"></Textbox>
                    <View height={8}/>
                    <Button color="#FF6C44" title="Sign Up" titleColor="white"></Button>
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop:16}}>
                        <Text style={{color:'#898B9A', fontSize:16, fontFamily:'SVN-Gilroy-Medium'}}>Already have an account?</Text>
                        <View width={8}/>
                        <Text style={{color:'#FF6C44', fontSize: 16, fontFamily:'SVN-Gilroy-Bold'}}>Sign Up</Text>
                    </View>
                </View>
                {/* End: INPUT */}
                {/* ------------------------------------------------------------------- */}

                {/* Begin: FOOTER */}
                <View style={styles.footerContainer}>
                    <Button color="#0064C0" title="Continue With Facebook" titleColor="white" icon={<Icon name='logo-facebook' size={18} color='white'/>}></Button>
                    <Button color="#F5F5F8" title="Continue With Google" titleColor="#898B9A" image={<Image style={{width:16, height:16}} source={require('../assets/google-icon.png')}/>}></Button>
                </View>
                {/* End: FOOTER */}
                {/* ------------------------------------------------------------------- */}

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        height:100,
        //backgroundColor:'red',
    },
    headerContainer: {
        height:60,
        //backgroundColor: 'green',
    },
    inputContainer: {
        flex: 3,
        //backgroundColor: 'blue',
    },
    footerContainer: {
        flex: 1,
        //backgroundColor: 'yellow',
    }
});
