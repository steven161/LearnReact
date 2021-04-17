import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

class TextBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}{...this.props} />
            <Icon style={[
              styles.icon,
              this.props.isValid !== undefined && { color: this.props.isValid === true ? '#27AE60' : '#FF1717'}
            ]}
            name={this.props.icon}
            size={24}
            onPress={this.props.onPressIcon}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelText: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy-Medium',
    color: '#898B9A',
  },
  icon: {
    color: '#898B9A'
  },
  inputContainer: {
    height: 56,
    borderRadius: 12,
    //backgroundColor: '#ffffff',
    backgroundColor: '#F5F5F8',
    paddingHorizontal: 24,
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: '100%',
    color: '#111A2C'
  }
})


TextBox.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextBox;
