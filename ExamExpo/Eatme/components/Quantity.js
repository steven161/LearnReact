import React, { Component } from 'react'
import { View , Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import GilroyText from './GilroyText';

export default class Quantity extends Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 15
        };
    }

    handlePressMinus = () => {
        let s = this.state.quantity;
        this.setState({
            quantity: s - 1,
        });
    };

    handlePressPlus = () => {
        let s = this.state.quantity;
        this.setState({
            quantity: s + 1,
        });
    };

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                 <Entypo name="minus" size={24} color="#898B9A" onPress={this.handlePressMinus}/>
                 <GilroyText style={styles.quantity} fontStyle='SemiBold'><Text>{this.state.quantity}</Text></GilroyText>
                 <Entypo name="plus" size={24} color="#FF6C44"  onPress={this.handlePressPlus}/>
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
        backgroundColor: '#F5F5F8',
        borderRadius: 8,
        paddingHorizontal:16,
    },
    quantity: {
        color:'#111A2C',
        fontSize: 16,
        marginHorizontal:16,
    },
});