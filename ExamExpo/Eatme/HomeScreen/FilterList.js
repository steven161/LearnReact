import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

const filters = [
  {
    id: 1,
    name: "Featured",
  },
  {
    id: 2,
    name: "Nearby you",
  },
  {
    id: 3,
    name: "Popular",
  },
  { id: 4, name: "Newest" },
  {
    id: 5,
    name: "Trend",
  },
];

export default class FilterList extends Component {
    state = {
        selectedId : -1,
    };

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => {
          this.setState({selectedId: index});
      }}>
        <Text style={[styles.text,{color:(this.state.selectedId === index)?'#FF6C44':'#111A2C'}]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filters}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return "filter-" + item.id;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 24,
    },
    text: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: 14,
        
    }
});
