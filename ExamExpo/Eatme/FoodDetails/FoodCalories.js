import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GilroyText from "../components/GilroyText";
import { AntDesign } from "@expo/vector-icons";

export default class FoodCalories extends Component {
  state ={
    isFavourite: true,
  };

  render() {
    return (
      <View style={[this.props.style,styles.foodImageDetail]}>
        <View style={styles.foodImageDetailTopBar}>
          <View style={styles.caloriesContainer}>
            <GilroyText style={{ fontSize: 16 }}>
              <Text>🔥</Text>
            </GilroyText>
            <GilroyText style={{ fontSize: 10 }}>
              <Text>{this.props.calories} Calories</Text>
            </GilroyText>
          </View>

          <View flex={1}></View>

          <AntDesign name="heart" size={16} color={this.state.isFavourite? "#FF6C44": "#FFFFFF"} onPress={() => {
              let fav = !this.state.isFavourite;
              this.setState({isFavourite: fav});
          }}/>
        </View>
        <Image source={require("../assets/monan1.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  foodImageDetail: {
    backgroundColor: "#F5F5F8",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
  },
  foodImageDetailTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
