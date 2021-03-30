import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {SimpleLineIcons as Icon} from '@expo/vector-icons'

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <Icon name='home' size='48' color='#01B760'/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width:80,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:80,
        backgroundColor:'#E4F7EF'
    },
    
});


