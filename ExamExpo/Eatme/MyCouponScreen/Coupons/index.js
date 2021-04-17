import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Coupon from './Coupon'
import data from './data'
import dataUsed from './dataUsed'

export default class index extends Component {

    renderItem = ({item, index}) => {
        return (
            <Coupon 
                companyName = {item.companyName}
                saleOff = {item.saleOff}
                date = {item.date}
                image={item.image}
                status={this.props.status}
            />
        );
    };

    render() {
        return (
            <View>
                <FlatList 
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data={this.props.status === 'Used' ? dataUsed :data }
                    keyExtractor={(item,index) => {
                        return 'coupon-' + item.id;
                    }}

                    renderItem = {this.renderItem}

                    ItemSeparatorComponent = { () => {
                        return (
                            <View height={8}/>
                        );
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

