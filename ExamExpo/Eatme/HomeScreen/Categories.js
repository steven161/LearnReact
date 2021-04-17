import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlightBase,
  ActivityIndicator,
} from "react-native";
import categories from "./data/categories";

const W = Dimensions.get("window").width;
const url = 'https://training.softech.cloud/api/categories';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      loading: true,
      categories : [],
    };
  }

  componentDidMount(){
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
            this.setState({loading: false, categories: json.categories});
    })
    .catch((except) => {
        console.log(except);
    });
  }


  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              this.state.selectedId === index ? "#FF6C44" : "#F5F5F8",
          },
        ]}
        onPress={() => {
          this.setState({ selectedId: index });
        }}
      >
        <Image style={styles.image} source={{uri:item.imageUrl}} />
        <Text
          style={[
            styles.text,
            { color: this.state.selectedId === index ? "white" : "#525C67" },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
          { this.state.loading && <ActivityIndicator /> }
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.categories}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return "catetory-" + item.id;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  button: {
    height: 48,
    width: (W - 24 - 2 * 16 - 48) / 2,
    borderRadius: 10,
    //backgroundColor:'#FF6C44',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    flexDirection: "row",
  },
  text: {
    //color: 'white',
    fontWeight: "700",
  },
  image: {
    width: 48,
    height: 48,
  },
});
