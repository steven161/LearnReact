import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:28, fontWeight:"700"}}>Let's sign you in</Text>
                <View height={8}/>
                <Text style={{fontSize:18, fontWeight:"600", color:'#B7B8BA'}}>Welcome back, you've been missed!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
