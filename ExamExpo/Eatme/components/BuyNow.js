import React, { Component } from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import GilroyText from './GilroyText';

export default class BuyNow extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
                <GilroyText fontStyle='SemiBold' style={styles.text}>
                    <Text>
                        Buy Now
                    </Text>
                </GilroyText>
                <GilroyText fontStyle='SemiBold' style={styles.text}>
                    <Text>
                        $ {this.props.total}
                    </Text>
                </GilroyText>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 54,
        borderRadius:8,
        backgroundColor: '#FF6C44',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginHorizontal: 16,
    }
});
