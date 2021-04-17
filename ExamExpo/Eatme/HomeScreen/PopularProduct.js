import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions , Image} from 'react-native'
import PropTypes from 'prop-types'
import {AntDesign} from '@expo/vector-icons'

const W = Dimensions.get('window').width;
class PopularProduct extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.topRowContainer}>
                    <Text style={styles.textCalories}>🔥{this.props.calories} Calories</Text>
                    <View style={{flex:1}}></View>
                    <AntDesign name="heart" size={14} color={this.props.isFavorite? "#ff6c44" : "white"} />
                </View>
                <Image style={styles.image} source={{uri:this.props.imageUrl}}/>
                <Text style={styles.textName}>{this.props.name}</Text>
                <Text style={styles.textDescription}>{this.props.description}</Text>
                <View style={styles.priceContainer}> 
                    <Text style={styles.textPrice}>${this.props.price}</Text>
                </View>
            </View>
        )
    }
}

PopularProduct.propTypes = {
    calories: PropTypes.number,
    isFavorite: PropTypes.bool,
    imagePath: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
};

PopularProduct.defaultProps = {
    calories: 0,
    isFavorite: false,
    imagePath: require('./assets/hamberger.png'),
    name:'name',
    description: 'description',
    price: 0,
}

const styles = StyleSheet.create({
    itemContainer: {
        width: (W - 24 - 2*16 - 48)/2,
        backgroundColor: '#F5F5F8',
        borderRadius: 8,
        //marginLeft: 16,
        alignItems: 'center',
        padding: 16,
    },
    topRowContainer: {
        flexDirection: 'row',
    },
    image : {
        width: 80,
        height: 80,
        //backgroundColor: 'red',
    },
    textCalories: {
        fontSize: 10,
        color:  '#757D85',
        fontFamily: 'SVN-Gilroy-Regular',
    },
    textName: {
        fontSize: 14,
        color: '#111A2C',
        fontFamily: 'SVN-Gilroy-Medium',
    },
    textDescription: {
        fontSize: 10,
        color:  '#757D85',
        height:30,
        fontFamily: 'SVN-Gilroy-Regular',
        marginTop: 4,
        textAlign: 'center',
    },
    textPrice : {
        fontSize: 16,
        color: '#111A2C',
        fontFamily: 'SVN-Gilroy-Bold',
        marginTop: 8,
        //alignSelf: 'flex-end',
    },
    priceContainer: {
       
    }
})

export default PopularProduct;
