import React, { Component } from 'react'
import { View , StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderRadius: 8,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginHorizontal: 12,
    },
    text: {
         fontSize: 16,
         fontFamily: 'SVN-Gilroy-SemiBold',  
         marginLeft: 8, 
    }
})
export default class Button extends Component {
    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.color}]}>
                {this.props.icon}
                {this.props.image}
                <Text style={[styles.text, {color: this.props.titleColor}]}>{this.props.title}</Text>
            </View>
        )
    }
}
