import React, { Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'

export default class List extends Component {
    state = {
        names: [
            {
                id:0,
                name:'Ben'
            },
            {
                id:1,
                name:'Susan'
            },
            {
                id:2,
                name:'Peter'
            },
            {
                id:3,
                name:'Mary'
            }
        ],
    }

    alertItemName = (item) => {
        alert(item.name);
    }

    render() {
        return (
            <SafeAreaView>
                {
                    this.state.names.map((item,index) => (
                        <TouchableOpacity 
                            key={item.name}
                            onPress={()=> this.alertItemName(item)}
                            style={styles.container}>
                             <Text style={styles.text}>{item.name}</Text>   
                        </TouchableOpacity>
                    ))
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin:3,
        backgroundColor:'#d9f9b1',
        alignItems:'center',
    },
    text: {
        color:'#4f603c'
    }
});
