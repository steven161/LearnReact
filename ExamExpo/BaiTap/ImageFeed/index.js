import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import AuthorRow from './AuthorRow'
import Card from './Card'

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card 
                    fullname={'First Last123'}
                    linkText={'Comments'}
                    image={{uri:'https://unsplash.it/600/600'}}
                    onPressLinkText={() => {
                        alert('test');
                    }}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStartColor: '#fff',
        marginTop: 50,
        //justifyContent:'center',
        //alignItems: 'center',
    }
});

