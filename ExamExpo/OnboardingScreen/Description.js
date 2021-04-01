import React, { Component } from 'react'
import { View , Text, StyleSheet} from 'react-native'



export default class Description extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <Text style={styles.subTiteText}>{this.props.subTitle}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //backgroundColor: 'red',
    },
    titleText: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: 24,
        color: '#111A2C',
        textAlign:'center',
        marginTop: 64,
        marginBottom: 24,
    },
    subTiteText: {
        fontFamily:'SVN-Gilroy-Regular',
        fontSize:14,
        color:'#525C67',
        textAlign: 'center',
        marginBottom: 8,
    },
});
