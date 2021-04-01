import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Button extends Component {
    render() {
        return (
            <View style={[styles.container,{backgroundColor: this.props.color},{flex:this.props.flex}]}>
                {this.props.icon}
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: 56,
        borderRadius: 8,
        //backgroundColor: '#01B760',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    }, 
    text : {
        color:'white',
        fontWeight:"600", 
        fontSize:18 ,
        marginLeft: 8,
    }
});
