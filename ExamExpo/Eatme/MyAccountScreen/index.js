import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import InfoGroup from './InfoGroup'
import data from './data'
import data2 from './data2'

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InfoGroup data={data}/>
                <View height={16}/>
                <InfoGroup data={data2}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    }
})
