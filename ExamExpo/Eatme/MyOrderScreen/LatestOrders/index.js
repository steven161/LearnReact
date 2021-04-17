import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import LatestOrder from "./LatestOrder";
import data from "./data";

/*
 id: 2,
        companyName: 'Burger King',
        companyId: '12.00',
        numberItems: 2,
        dateTime:'30 Nov, 12:20',
        status: 'Order Delivered',
        logo: ''
*/
export default class index extends Component {
  renderItem = ({ item, index }) => {
    return (
      <LatestOrder
        companyName={item.companyName}
        price={item.price}
        numberItems={item.numberItems}
        dateTime={item.dateTime}
        status={item.status}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return "LatestOrder-" + item.id;
          }}
          ItemSeparatorComponent = {()=> <View height={16}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
