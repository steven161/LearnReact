import React, { Component } from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types'

class FreeShipping extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <FontAwesome name="usd" size={14} color="#111A2C" />
                <Text style={styles.text}>{this.props.shipPrice===0 ? 'Free' : this.props.shipPrice} shipping</Text>
            </View>
        )
    }
}

FreeShipping.propTypes = {
    shipPrice: PropTypes.number.isRequired,
};

FreeShipping.defaultProps = {
    shipPrice: 0,
};

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

export default FreeShipping;
