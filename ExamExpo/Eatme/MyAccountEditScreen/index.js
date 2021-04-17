import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SelectedButton from '../components/SelectedButton'
import LineEdit from './LineEdit'
import data from './data'

export default class index extends Component {
    render() {
        return (
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}>
                <View style={styles.editContainer}>
                {
                    data.map((item,index) => {
                        return (
                            <LineEdit title={item.title} description={item.description}/>
                        );
                    })
                }
                </View>

                <View height={40}/>
                <SelectedButton style={{height: 56}} title="Save" fontSize={16} selected={true}/>
                <View height={16}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    editContainer : {
        backgroundColor: '#FBFBFB',
        borderRadius: 16,
        padding: 16,
    }
})
