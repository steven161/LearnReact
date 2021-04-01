import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonItem from "./ButtonItem";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#FA729F", "#FA5D92", "#FE4A87"]}
          style={styles.headerBlock}
        ></LinearGradient>
        <View style={styles.header}>
          <Text style={styles.title}>Classify Transaction</Text>
          <Text style={styles.subTitle}>Classify this transaction into a</Text>
          <Text style={styles.subTitle}>particular category</Text>
        </View>

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
  headerBlock: {
    width: 320,
    height: 320,
    borderRadius: 60,
    transform: [{ rotateX: "0deg" }, { rotateZ: "-40deg" }],
  },
  header: {
    height: 100,
    //backgroundColor: 'blue',
    paddingLeft: 24,
    marginTop: -200,
  },
  title: {
    color: "white",
    fontSize: 30,
    marginBottom: 8,
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    marginTop: 8,
  },
  listBlock: {
    flex: 1,
    //backgroundColor: "green",
  },
  itemRow: {
    flexDirection: "row",
  },
});
