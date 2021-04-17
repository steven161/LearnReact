import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: "row",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    marginLeft: 8,
    color: "white",
    fontSize: 16,
    fontFamily: "SVN-Gilroy-SemiBold",
  },
});

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.loginButton, this.props.style]}
        onPress={ this.props.onPress}
      >
        {this.props.icon}
        {this.props.image}
        {this.state.loading && <ActivityIndicator />}
        <Text style={[styles.loginText, { color: this.props.titleColor }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

//Type Checking
Button.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  icon: PropTypes.element,
  image: PropTypes.element,
  titleColor: PropTypes.string,
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

// Default Props
Button.defaultProps = {
  titleColor: "white",
  style: null,
  icon: null,
  image: null,
};

export default Button;
