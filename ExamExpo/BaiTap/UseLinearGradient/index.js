import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ButtonItem from "./ButtonItem";
import Footer from "./Footer";
import Header from "./Header";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Header/>
        <View style={styles.listBlock}>
          <View style={styles.itemRow}>
            <ButtonItem
              title="General"
              icon="grid"
              color="#0399CF"
              color1="#71C8FC"
              color2="#039BE7"
            />
            <ButtonItem
              title="Transport"
              icon="bus"
              color="#4928AD"
              color1="#A183E5"
              color2="#661EFE"
            />
          </View>
          <View style={styles.itemRow}>
            <ButtonItem
              title="Shopping"
              icon="basket"
              color="#F44284"
              color1="#F57FA6"
              color2="#FF4180"
            />
            <ButtonItem
              title="Bills"
              icon="md-document-text"
              color="#D5661A"
              color1="#FFB765"
              color2="#FF6C02"
            />
          </View>
          <View style={styles.itemRow}>
            <ButtonItem
              title="Entertainment"
              icon="play-circle"
              color="#2960FE"
              color1="#7BB5FB"
              color2="#2A62FF"
            />
            <ButtonItem
              title="Grocery"
              icon="fast-food"
              color="#159F5B"
              color1="#8BD398"
              color2="#00C852"
            />
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#1A1B2E",
  },
  
  listBlock: {
    flex: 1,
    //backgroundColor: "green",
    justifyContent: "flex-end",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
