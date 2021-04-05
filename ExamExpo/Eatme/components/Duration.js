import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from 'prop-types'

class Duration extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <AntDesign name="clockcircleo" size={14} color="#111A2C"/>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

Duration.propTypes = {
    title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
      color: '#111A2C',   
      fontSize: 12,
      lineHeight: 16,
      marginLeft: 9,
      fontWeight: "bold",
  },
});

export default Duration;
