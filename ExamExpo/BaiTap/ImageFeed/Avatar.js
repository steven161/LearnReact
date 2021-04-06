import React from 'react'
import PropTypes from 'prop-types'
import { ColorPropType , View, StyleSheet, Text} from 'react-native';

export default function Avatar({size, backgroundColor, initials}) {
    const style =  {
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor,
    };

    return (
       <View style ={[styles.container, style]}>
           <Text style={styles.text}>{initials}</Text>
       </View>
    )
}

// Avatar.PropTypes = {
//     initials: PropTypes.string.isRequired,
//     size: PropTypes.number.isRequired,
//     background: ColorPropType.isRequired,
// };



const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
        color: 'white'
    },
});