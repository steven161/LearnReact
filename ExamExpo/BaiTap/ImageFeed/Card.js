import React, { Component } from 'react'
import { View , Image, StyleSheet} from 'react-native'
import AuthorRow from './AuthorRow'
import PropTypes from 'prop-types'

export default class Card extends Component {

    static propTypes = {
        fullname : PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string.isRequired,
        onPressLinkText: PropTypes.func.isRequired,
    };

    static defaultProps ={
        linkText:'',
        onPressLinkText: () => {},
    };

    render() {
        const {fullname, image, linkText, onPressLinkText} = this.props;

        return (
            <View>
                <AuthorRow 
                    fullname={fullname}
                    linkText={linkText}
                    onPressLinkText={onPressLinkText}
                />

                <Image style={ styles.image} source={image} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
});


