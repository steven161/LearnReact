import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GilroyText from './GilroyText';
import PropTypes from 'prop-types'

class Sizes extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex : 1,
        };
    }

    render() {
     
        return (
            <View style={[styles.container, this.props.style]}>
                <GilroyText style={styles.text} fontStyle='SemiBold'>Sizes:</GilroyText>
                {
                    this.props.items.map((item,i) => {
                        return (
                            <TouchableOpacity 
                                key={i}
                                style={this.state.selectedIndex === i ? styles.selectedBox : styles.box}
                                onPress={()=>{
                                    this.setState({selectedIndex: i});
                                }}
                            >
                                <GilroyText style={this.state.selectedIndex === i ? styles.selectedItemText : styles.itemText} fontStyle='SemiBold'>
                                    <Text>{item}</Text>
                                </GilroyText>
                            </TouchableOpacity>
                        );
                    })
                }
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: '#111A2C',
        marginRight: 8,
    },
    box: {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderColor: '#BBBDC1',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
    },
    itemText: {
        fontSize: 14,
        color: '#BBBDC1',
    },
    selectedBox: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor:'#FF6C44',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
    },
    selectedItemText: {
        fontSize: 14,
        color: 'white',
    },
    
});

Sizes.propTypes = {
    items : PropTypes.array.isRequired,
};

export default Sizes;