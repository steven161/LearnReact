import React, { Component } from 'react'
import { View , Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import GilroyText from './GilroyText';

export default class Quantity extends Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handlePressMinus = () => {
        if(this.state.quantity == 1) 
            return;

        let s = this.state.quantity - 1;
        this.setState({
            quantity: s,
        });
        this.props.onPress(s);
    };

    handlePressPlus = () => {
        let s = this.state.quantity + 1;
        this.setState({
            quantity: s,
        });
        this.props.onPress(s);
    };

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity onPress={this.handlePressMinus}><Text style={styles.textMinus}>-</Text></TouchableOpacity>
                 <GilroyText style={styles.quantity} fontStyle='SemiBold'><Text>{this.state.quantity}</Text></GilroyText>
                 <TouchableOpacity onPress={this.handlePressPlus}><Text style={styles.textPlus}>+</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 56,
        width:120,
        backgroundColor: '#F5F5F8',
        borderRadius: 8,
        paddingHorizontal:16,
    },
    quantity: {
        color:'#111A2C',
        fontSize: 16,
        marginHorizontal:16,
    },
    textMinus: {
        color:"#898B9A",
        fontSize: 24,
        fontWeight: "600",
    },
    textPlus: {
        color:"#FF6C44",
        fontSize: 24,
        fontWeight: "600",
    }
});