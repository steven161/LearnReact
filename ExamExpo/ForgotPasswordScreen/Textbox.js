import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Textbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.placeHolder}>{this.props.placeHolder}</Text> 
                 {this.props.icon}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //backgroundColor: '#E4E4E4',
        backgroundColor: 'rgba(228,228,228,0.3)',
        borderRadius: 8,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginVertical: 16,
        //opacity: 0.3,
    },
    placeHolder : {
        fontFamily: 'SVN-Gilroy-Medium',
        fontSize: 14,
        color:'#898B9A',
        opacity: 1,
        
    }
});
