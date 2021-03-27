import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    labelText : {
        fontSize: 14,
        fontFamily: 'SVN-Gilroy-Medium',
        color: '#898B9A',
    },
    placeholderText : {
        fontSize: 14,
        fontFamily: 'SVN-Gilroy-Medium',
        color: '#898B9A'
    },
    icon : {
        color: '#898B9A'
    },
    inputContainer: {
        height: 56,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:24,
        backgroundColor: '#E4E4E4',
        borderRadius: 12,
        marginTop: 12,
    }
});

export default class Textbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.labelText}>{this.props.label}</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.placeholderText}>{this.props.placeholder}</Text>
                    <Icon style={styles.icon} name={this.props.icon} size={24}></Icon>
                </View>
            </View>
        )
    }
}
