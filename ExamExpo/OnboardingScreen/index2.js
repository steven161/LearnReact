import React, { Component } from 'react'
import { View , Text, StyleSheet} from 'react-native'
import {SvgXml} from 'react-native-svg'
import Button from '../LoginScreen2/Button'
import Description from './Description'
import svg1 from './svg1'
import svgSlide from './svgSlide'


export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <SvgXml xml={svg1}/>
                </View>

                <View style={styles.bodyContainer}>
                    <Description 
                        title="Choose a Favourite Food"
                        subTitle="When you oder Eat Steet, we’ll hook you up with
                        exclusive coupon, specials and rewards"
                    />
                    <View style={styles.sliderContainer}>
                        <SvgXml xml={svgSlide}/>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                     <Text style={styles.skipText}>Skip</Text>
                    <View flex={1}/>
                    <Button title="Next" color='#FF6C44' flex={1}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        //backgroundColor: 'red',
    },
    headerContainer: {
        flex:6,
        //backgroundColor: 'green',
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 4,
        //backgroundColor:'blue',
        alignItems: 'center'
    },
    sliderContainer : {
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        flex: 1,
    },
    footerContainer: {
        //backgroundColor:'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 8,
    },
    skipText : {
        fontFamily: 'SVN-Gilroy-Regular',
        fontSize: 16,
        color: '#757D85'
    }
});
