import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const logo = {
    url: 'https://reactnative.dev/img/tiny_logo.png',
    with: 64,
    height: 64,
};

const UseScrollView = () => {
    return (
        <ScrollView>
            <Text style={{fontSize: 96}}>Scroll me Plz</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 96}}>If you like</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 96}}>Scrolling Down</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 96}}>What is best</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
        </ScrollView>
    )
}

export default UseScrollView

const styles = StyleSheet.create({})
