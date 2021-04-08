import { bool } from 'prop-types';
import React, { Component } from 'react'
import { View , Text, StyleSheet} from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>MemoryGame</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        flex: 1, 
        flexDirection: 'column',
        alignSelf:'stretch',
        paddingTop:20,
        paddingBottom:5,
        backgroundColor:'#f3f3f3'
    },
    header_text: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
