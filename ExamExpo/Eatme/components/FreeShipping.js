import React, { Component } from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class FreeShipping extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <FontAwesome name="usd" size={14} color="#111A2C" />
                <Text style={styles.text}>Free shipping</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color:'#111A2C',
        fontSize: 12,
        lineHeight: 16,
        marginLeft: 12,
        fontWeight: 'bold',
    }
});
