import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps'

export default class UseMap extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>abc</Text>
                <MapView 
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 16.06947322970616,
                        longitude: 108.22257583009068,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})
