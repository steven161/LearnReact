import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Proptypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 24,
    color: '#111A2C',
    fontFamily: 'SVN-Gilroy-Bold',
  },

  subTitleText: {
    marginTop: 8,
    fontSize: 14,
    color: '#525C67',
    fontFamily: 'SVN-Gilroy-Medium',
  },
});
 
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.props.title}</Text>
        <Text style={styles.subTitleText}>{this.props.subTitle}</Text>
      </View>
    );
  }
}

Header.propTypes = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.string,
};

export default Header;