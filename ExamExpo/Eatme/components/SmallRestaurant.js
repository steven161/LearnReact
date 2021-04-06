import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GilroyText from "./GilroyText";
import PropTypes from "prop-types";

class SmallRestaurant extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            width={32}
            height={32}
            source={this.props.imagePath}
          />
        </View>
        <View style={styles.textContainer}>
          <GilroyText
            style={{ color: "#111A2C", fontSize: 14 }}
            fontStyle="Bold"
          >
            <Text>{this.props.company}</Text>
          </GilroyText>
          <View height={2} />
          <GilroyText style={{ color: "#898B9A", fontSize: 14 }}>
            <Text>{this.props.distance} Km from you</Text>
          </GilroyText>
        </View>
      </View>
    );
  }
}

SmallRestaurant.propTypes = {
  imagePath: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
};

SmallRestaurant.defaultProps = {
  imagePath: require("../assets/Logo.png"),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#FF6C44",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 0,
    width: 32,
    height: 32,
  },
  textContainer: {
    marginLeft: 16,
    justifyContent: "center",
  },
});

export default SmallRestaurant;
