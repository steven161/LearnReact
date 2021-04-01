import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default class ButtonItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[this.props.color1, this.props.color2, this.props.color]}
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
    flex: 1,
    backgroundColor: "#272B48",
    borderRadius: 16,
    alignItems: "center",
    padding: 24,
    margin: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 24,
    fontWeight: 'bold'
  },
});
