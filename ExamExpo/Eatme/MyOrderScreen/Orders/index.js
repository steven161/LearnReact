import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Order from './Order'
import data from './data'

// id: 1,
// companyName: 'Pizza Hut',
// companyId: '#162432',
// numberItems: 3,
// status: 'Food on the way',
// logo: ''

export default class index extends Component {
    renderItem = ({item, index}) => {
        return (
            <Order 
                companyName = {item.companyName}
                companyId = {item.companyId}
                numberItems = {item.numberItems}
                status = {item.status}
            />
        );
    };

    render() {
        return (
            <View>
                <FlatList 
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    data = {data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index)=>{
                        return 'order-'+ item.id;
                    }}
                    ItemSeparatorComponent = {()=> <View height={16}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
