import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import GilroyText from '../components/GilroyText'



export default class LineSetting extends Component {

  render() {
      let IconType = this.props.iconType;
      let icon_name = this.props.icon;
    return (
      <View style={styles.container}>
        <IconType name={icon_name} size={16} color="red" />
        <View width={20} />
        <GilroyText style={{fontSize:14, color:'#111A2C'}}>
          <Text>{this.props.title}</Text>
        </GilroyText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
});
