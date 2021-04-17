import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  labelText: {
    fontSize: 14,
    fontFamily: "SVN-Gilroy-Medium",
    color: "#898B9A",
  },

  placeholderText: {
    fontSize: 14,
    fontFamily: "SVN-Gilroy-Medium",
    color: "#898B9A",
  },

  icon: { color: "#898B9A" },

  inputContainer: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F5F5F8",
    paddingHorizontal: 24,
    marginTop: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const validateEmail = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

class TextboxEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isValidEmail: false,
      isEndEdit : false,
    };
  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            //backgroundColor='red'
            flex={1}
            style={styles.placeholderText}
            placeholder={this.props.placeholder}
            onChangeText={(txt) => {
              this.setState({ 
                text: txt, 
                isEndEdit: false
              });
              this.props.onChangeText(txt);
            }}
            onEndEditing={() => {
              let valid = validateEmail(this.state.text);
              this.setState({
                isValidEmail: valid,
                isEndEdit : true,
              });
            }}
          />

          { this.state.text === '' &&  (
            <AntDesign name="checkcircleo" size={24} color="#898B9A" />
          )}
          
          { this.state.text !== '' && !this.state.isEndEdit && (
            <AntDesign name="checkcircleo" size={24} color="black" />
          )}
          
          { this.state.text !== '' && this.state.isEndEdit && this.state.isValidEmail && (
              <AntDesign name="checkcircleo" size={24} color="#27AE60" />
          )}

          { this.state.text !== '' && this.state.isEndEdit && !this.state.isValidEmail && (
              <Entypo name="circle-with-cross" size={24} color="red" />
          )}

        </View>
      </View>
    );
  }
}

TextboxEmail.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default TextboxEmail;
