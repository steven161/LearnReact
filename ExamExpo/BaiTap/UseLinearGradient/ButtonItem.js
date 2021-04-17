import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default class ButtonItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.75]}
          colors={[this.props.color1, this.props.color]}
          style={styles.iconContainer}
        >
          <Icon name={this.props.icon} size={32} color="white" />
        </LinearGradient>
        <Text style={[styles.text, { color: this.props.color }]}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: W/2 - 40,
    height: W/2 - 30, 
    backgroundColor: "#272B48",
    borderRadius: 16,
    alignItems: "center",
    padding: 24,
    margin: 16,
    aspectRatio: 1,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    marginTop: 24,
    fontWeight: '700'
  },
});
