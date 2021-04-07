import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default class Header extends Component {
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#FA729F", "#FA5D92", "#FE4A87"]}
          style={styles.headerBlock}
        ></LinearGradient>

        <View style={styles.header}>
          <Text style={styles.title}>Classify Transaction</Text>
          <Text style={styles.subTitle}>Classify this transaction into a</Text>
          <Text style={styles.subTitle}>particular category</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBlock: {
    position: "absolute",
    marginTop: -250,
    marginLeft: -90,
    width: W * 0.9,
    height: H * 0.6,
    borderRadius: 60,
    transform: [{ rotateX: "0deg" }, { rotateZ: "-40deg" }],
  },
  header: {
    height: 100,
    //backgroundColor: 'blue',
    paddingLeft: 24,
    //marginTop: -200,
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
});
