import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";

const url = "https://jsonplaceholder.typicode.com/photos";

const data1 = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
];
export default class NetworkingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.title}</Text>
        <Text>{item.url}</Text>
        <Image source={{ uri: item.thumbnailUrl }} style={{ height: 120, width: 120 }} />
        <Text>{item.thumbnailUrl}</Text>
      </View>
    );
  };

  componentDidMount() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* {<ActivityIndicator />} */}
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(item, index) => {
            return "photo-" + item.id;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
  itemContainer : {
      borderColor: 'red',
      borderWidth: 2,
  }
});
