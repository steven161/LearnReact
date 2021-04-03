import React, { Component } from 'react'
import {View, Text, Switch, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        marginHorizontal:12,
        alignItems: 'center',
    },
    saveMeText: {
        marginLeft: 8,
        fontFamily:'SVN-Gilroy-Regular',
        color:'#898B9A',
    }
});

export default class SwitchButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Switch trackColor={{ false: "#898B9A", true: "#FF6C44" }}
                        ios_backgroundColor='#898B9A'
                        thumbColor="#ffffff"
                        onValueChange={() => {}}
                        value={false}/>
                <Text style={styles.saveMeText}>{this.props.title}</Text>
            </View>
        )
    }
}
