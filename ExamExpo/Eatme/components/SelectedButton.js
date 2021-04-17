import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'
import GilroyText from "./GilroyText";

class SelectedButton extends Component {
    constructor(props){
        super(props);
    }
   

  render() {
    return (
      <TouchableOpacity 
      disabled={this.props.disabled}
      onPress={this.props.onPress}
      style={[
        styles.button, 
        {backgroundColor : this.props.selected?'#FF6C44': '#FF6C4410'},
        this.props.style,
         ]}>

        <GilroyText fontStyle="Bold" 
         style={{
              color:this.props.selected?'white':'#FF6C44',
             fontSize: this.props.fontSize
            }}
        >
          <Text>{this.props.title}</Text>
        </GilroyText>
      </TouchableOpacity>
    );
  }
}

SelectedButton.propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
    fontSize: PropTypes.number,
    height: PropTypes.number,
};

SelectedButton.defaultProps = {
    selected: true,
    fontSize: 12,
};

const styles = StyleSheet.create({
  button: {
    //height: 43,
    borderRadius: 10,
    //flex: 1,
   // justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SelectedButton ;
