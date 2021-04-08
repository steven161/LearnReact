import React, { Component } from 'react'
import { View , StyleSheet, Text} from 'react-native'

export default class Score extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <Text style={styles.score}>{this.props.score}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        padding:10,
    },
    score : {
        fontSize:40,
        fontWeight: 'bold',
    }
});
