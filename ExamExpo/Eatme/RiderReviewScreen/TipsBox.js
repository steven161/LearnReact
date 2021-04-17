import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import GilroyText from "../components/GilroyText";

export default class TipsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  onPressHandle = (index) => {
    this.setState({ selectedIndex: index });
    this.props.onChangeSelected(index);
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <GilroyText
          fontSize="Medium"
          style={{ fontSize: 14, color: "#111A2C" }}
        >
          Add Tips
        </GilroyText>

        <View style={styles.containerBox}>
          {this.props.items.map((item, index) => {
            return (
              <TouchableOpacity
                style={
                  this.state.selectedIndex === index
                    ? styles.selectedBox
                    : styles.box
                }
                onPress={() => {
                  this.onPressHandle(index);
                }}
              >
                <GilroyText
                  fontStyle='Medium'
                  style={
                    this.state.selectedIndex === index
                      ? styles.selectedText
                      : styles.text
                  }
                >
                  {index === 0 ? "No Tips" : "$" + item}
                </GilroyText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  containerBox: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    borderColor: "#BBBDC1",
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  selectedBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: "#FF6C44",
    borderRadius: 8,
    padding: 8,
  },
  text:{
    color: '#BBBDC1',
    fontSize: 14,
  },
  selectedText: {
    color: '#fff',
    fontSize: 14,
  }
});
