import React, { Component } from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue'
    }
});

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:286, height:90}} source={require('../assets/logo-eatme.png')}></Image>
            </View>
        )
    }
}
