import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import LineSetting from "./LineSetting";
import { AntDesign, Octicons, MaterialIcons,Entypo,Zocial } from "@expo/vector-icons";
import data from "./data";

export default class index extends Component {
    renderItem = ({item, index}) => {

      const source = {
        antDesign: AntDesign,
        octicons: Octicons,
        materialIcons: MaterialIcons,
        entypo: Entypo,
        zocial: Zocial
      };

        return (
            <LineSetting iconType={source[item.iconType]} icon={item.icon} title={item.title} />
        );
    };

  render() {
    return (
      <View style={styles.container}>

        <FlatList 
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => {
                return 'settings-' + index;
            }}
            ItemSeparatorComponent = {() => {
                return (
                <View style={{height:1, backgroundColor:'#DDDDDD', opacity: 0.3}} />
                );
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F5F5F8",
    padding: 16,
  },
});
