import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types'

class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : this.props.number,
        };
    }

    keys = [0,1,2,3,4];
    


    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {
                    this.keys.map((item, index) => {
                        return (
                            <View key={index} opacity={index < this.state.number ? 1 : 0.4}>
                                <AntDesign name="star" size={28} color="#FFA133" onPress={() => {
                                    this.setState({number: index + 1});
                                    this.props.onChangeRating(index + 1);
                                }}/>
                            </View>
                        );
                    })
                }
            </View>
        )
    }
}

Rating.propTypes = {
    number: PropTypes.number,
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Rating;
