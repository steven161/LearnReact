import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Textbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.placeHolder}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: "#F8F8F8",
        borderRadius: 8,
        justifyContent:'center',
        paddingLeft:16,
        marginVertical:8,
    }
});
