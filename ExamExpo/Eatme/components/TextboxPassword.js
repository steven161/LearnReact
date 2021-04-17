import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Ionicons, Entypo } from "@expo/vector-icons";

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

class TextboxPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      text: "",
      isValidPassword: false,
      isEndEdit: false,
    };
  }

  validatePassword = (text) => {
    console.log(text);
    //let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //if (reg.test(text) === false) {
    if(text.length < 4){  
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="visible-password"
            secureTextEntry={this.state.secureTextEntry}
            style={styles.placeholderText}
            placeholder={this.props.placeholder}
            onChangeText={(txt) => {
              this.setState({ text: txt, isEndEdit: false });
              this.props.onChangeText(txt);
            }}
            onEndEditing={() => {
              let valid = this.validatePassword(this.state.text);
              this.setState({ isValidPassword: valid, isEndEdit: true });
            }}
          />

          { this.state.text === '' &&  (
            <Ionicons
            name={this.state.secureTextEntry ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#898B9A"
            onPress={() => {
              let sec = this.state.secureTextEntry;
              this.setState({ secureTextEntry: !sec });
            }}
          />
          )}
          
          { this.state.text !== '' && !this.state.isEndEdit && (
            <Ionicons
            name={this.state.secureTextEntry ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="black"
            onPress={() => {
              let sec = this.state.secureTextEntry;
              this.setState({ secureTextEntry: !sec });
            }}
          />
          )}
          
          { this.state.text !== '' && this.state.isEndEdit && this.state.isValidPassword && (
               <Ionicons
               name={this.state.secureTextEntry ? "eye-outline" : "eye-off-outline"}
               size={24}
               color="#27AE60"
               onPress={() => {
                 let sec = this.state.secureTextEntry;
                 this.setState({ secureTextEntry: !sec });
               }}
             />
          )}

          { this.state.text !== '' && this.state.isEndEdit && !this.state.isValidPassword && (
              <Entypo name="circle-with-cross" size={24} color="red" />
          )}

         

          
        </View>
      </View>
    );
  }
}

TextboxPassword.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default TextboxPassword;
