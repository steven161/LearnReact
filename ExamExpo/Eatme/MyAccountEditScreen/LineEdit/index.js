import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import GilroyText from '../../components/GilroyText'

export default class index extends Component {
    render() {
        return (
            <View>
                <GilroyText style={{fontSize:14, marginTop: 16}}><Text>{this.props.title}</Text></GilroyText>
                <TextInput 
                style={styles.input} 
                defaultValue={this.props.description} 
                editable={true}
                keyboardType='default'
                keyboardAppearance='light'
                autoCapitalize='none'
                autoCorrect={false}
                underlineColorAndroid='transparent'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 56,
        backgroundColor: 'white',
        borderColor:'#F5F5F8',
        borderWidth: 1,
        borderRadius: 8,
        marginTop:8,
        paddingHorizontal: 24,
        fontSize: 14,
        fontFamily:'SVN-Gilroy-Regular',
    }
})
