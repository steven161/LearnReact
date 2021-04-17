import React, { Component } from 'react'
import { View , Text, StyleSheet, ImageBackground} from 'react-native'
import Button from '../LoginScreen2/Button'
import Textbox from './Textbox'
import {MaterialIcons as Icon} from '@expo/vector-icons'

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        <Text style={styles.pleaseEnterText}>Please enter you email address </Text>
                        <Textbox placeHolder="Email" icon={<Icon name='email' size={24} color='white'/> }/>
                    </View>

                    <View style={styles.footer}>
                        <Button title="RESET PASSWORD" color='#3366FF'></Button>
                    </View>
                    
                </ImageBackground>

            </View>
        )
    }
}

//const image = { uri: 'https://reactjs.org/logo-og.png' };
//const image = {uri: 'https://d25tv1xepz39hi.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg'};
const image = {uri: 'https://datvietmedia.com/wp-content/uploads/2018/09/wallpaper-3283213.jpg'};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        padding: 8,
    },
    header: {
        //backgroundColor: 'red',
    },
    forgotPasswordText : {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 100,
    },
    pleaseEnterText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 100,
    },
    footer: {
        flex: 1,
        //backgroundColor: 'green',
        //height: 50,
        justifyContent: 'flex-end',
    }
});