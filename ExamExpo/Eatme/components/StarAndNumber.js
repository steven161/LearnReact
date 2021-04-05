import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from 'prop-types'

class StarAndNumber extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <AntDesign name="star" size={14} color="white" />
        <Text style={styles.text}>{this.props.number}</Text>
      </View>
    );
  }
}

StarAndNumber.propTypes = {
    number: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 24,
    borderRadius: 8,
    backgroundColor: "#FF6C44",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  text: {
      color: 'white',   
      fontSize: 12,
      marginLeft: 5,
  },
});

export default StarAndNumber;
