import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#898B9A',
  },
});

class GilroyText extends Component {
  render() {
    return (
      <View style={{ flexDirection: this.props.direction }}>
        <Text style={[styles.text, this.props.style, { fontFamily: 'SVN-Gilroy-' + this.props.fontStyle }]}>{this.props.children}</Text>
      </View>
    );
  }
}

// Type checking
GilroyText.propTypes = {
    direction: PropTypes.oneOf(['row','column']),
    style: PropTypes.object,
    fontStyle: PropTypes.oneOf(['Regular','Medium','SemiBold','Bold']),
    children: PropTypes.element.isRequired,
};

GilroyText.defaultProps = {
    direction: 'row',
    fontStyle: 'Regular'
};

export default GilroyText;