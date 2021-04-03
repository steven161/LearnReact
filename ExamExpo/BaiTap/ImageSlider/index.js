import React, { Component } from 'react'
import { View , Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class index extends Component {
    state = {
        index: 0,
    };

     arrText = ["Hello","Microsoft","Apple"];

     handleNext = () => {
        this.setState({index: this.state.index + 1});
     };

     handlePrev =() => {
        this.setState({index: this.state.index - 1});
     };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.text}> {this.state.index}{this.arrText[this.state.index]}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.handlePrev}><Text>Prev</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleNext}><Text>Next</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        //height: 50,
        //backgroundColor: "red",    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:8,
        paddingHorizontal:8,
        marginBottom:16,
    },
    button:{
        borderWidth:1,
        borderColor: "gray",
        borderRadius: 5,
        height:56,
        width:80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 36,
    
    }
});
