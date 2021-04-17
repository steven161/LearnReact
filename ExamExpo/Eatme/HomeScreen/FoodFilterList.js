import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import foods from "./data/foods";

const W = Dimensions.get("window").width;

export default class FoodFilterList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={item.imagePath} />
        <View style={styles.textContainer}>
          <View style={styles.caloriesContainer}>
            <View style={{ flex: 1 }}></View>
            <Text style={styles.textCalories}>🔥{item.calories} Calories</Text>
          </View>

          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textDescription}>{item.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>${item.price}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={foods}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return "Recommended-" + item.id;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: W - 2 * 16,
    backgroundColor: "#F5F5F8",
    borderRadius: 8,
    marginLeft: 16,
    alignItems: "center",
    //padding: 24,
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    //backgroundColor: "green",
    paddingRight: 8
  },
  image: {
    width: 116,
    height: 112,
  },
  caloriesContainer: {
    flexDirection: "row",
    //backgroundColor: "red",
  },
  textCalories: {
    fontSize: 10,
    color: "#757D85",
    fontFamily: "SVN-Gilroy-Regular",
  },
  textName: {
    fontSize: 14,
    color: "#111A2C",
    fontFamily: "SVN-Gilroy-Medium",
    marginTop: 13,
  },
  textDescription: {
    fontSize: 10,
    color: "#757D85",
    fontFamily: "SVN-Gilroy-Regular",
    marginTop: 4,
    //textAlign: "center",
    marginTop: 5,
  },
  textPrice: {
    fontSize: 16,
    color: "#111A2C",
    fontFamily: "SVN-Gilroy-Bold",
    marginTop: 10,
    //alignSelf: 'flex-end',
  },
});
