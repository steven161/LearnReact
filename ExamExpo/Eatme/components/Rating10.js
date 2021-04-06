import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types'

const array = [0,1,2,3,4,5,6,7,8,9];
class Rating10 extends Component {
   
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {
                    array.map((item, index) => {
                        return (
                            <FontAwesome name="star-half" size={16} 
                            style={[index%2 ? styles.flipX: '', index < (this.props.number*2) ? styles.selectColor : styles.unSelectColor]}/>
                        );
                    })
                }
            </View>
        )
    }
}

Rating10.propTypes = {
    number: PropTypes.number,
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    flipX : {
        transform: [{scaleX: -1}],
        marginLeft: -2,
        marginRight:4,
    },
    selectColor : {
        color:"#FFA133"
    },
    unSelectColor : {
        color:"#FFA13340"
    },

});

export default Rating10;
