import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import SelectedButton from "../components/SelectedButton";
import Rating from "./Rating";
import axios from "axios";
import TipsBox from "./TipsBox";
import GilroyText from "../components/GilroyText";

const DATA_TIPS = [0, 5, 10, 15, 20];
export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      fullname: "",
      riderId: "",
      rating: 5,
      tipId: 0,
      comment: "",
    };
  }

  getRiderInfo() {
    const url =
      "https://training.softech.cloud/api/riders/6079678f2acd793445f939cd";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({
          imageUrl: res.data.result.imageUrl,
          fullname: res.data.result.name,
          riderId: res.data.result._id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getRiderInfo();
  }

  onChangeSelected = (index) => {
    this.setState({ tipId: index });
  };

  onPressSubmit = () => {
    console.log("call : onPressSubmit");

    const url =
      "https://training.softech.cloud/api/riders/" +
      this.state.riderId +
      "/review";
    const data = {
      star: this.state.rating,
      tip: DATA_TIPS[this.state.tipId],
      comment: this.state.comment.trim(),
      reviewUserId: "12345678",
    };
    console.log(data);

    axios
      .put(url, data)
      .then((result) => {
        console.log(result.data);
        if (result.data.ok === true) {
          this.props.nextScreen();
        } else {
          Alert.alert("Submit Review Error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  render() {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.infoContainer}>
            <Image style={styles.image} source={{ uri: this.state.imageUrl }} />
            <GilroyText
              fontStyle="Medium"
              style={{ fontSize: 22, color: "#111A2C", marginTop: 16 }}
            >
              {this.state.fullname}
            </GilroyText>
            <GilroyText
              style={{ fontSize: 14, color: "#111A2C", marginTop: 8 }}
            >
              Delivery Man
            </GilroyText>

            <View style={styles.statusContainer}>
              <View style={styles.greenCirle} />
              <GilroyText style={{ fontSize: 12, color: "#27AE60" }}>
                Order delivered
              </GilroyText>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <GilroyText style={{ fontSize: 18, color: "#111A2C" }}>
              Please Rate Delivery Service
            </GilroyText>
          </View>

          <Rating
              style={{marginTop: 16, marginHorizontal: 64}}
              number={this.state.rating}
              onChangeRating={(number) => {
                this.setState({ rating: number });
              }}
            />

          <TipsBox
            style={{ paddingHorizontal: 20, marginTop: 48 }}
            items={DATA_TIPS}
            onChangeSelected={this.onChangeSelected}
          />

          <TextInput
            style={styles.input}
            placeholder="Add a Comment"
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="default"
            keyboardAppearance="default"
            multiline={true}
            onChangeText={(txt) => {
              this.setState({ comment: txt });
            }}
          />

          <View style={styles.buttonContainer}>
            <SelectedButton
              onPress={this.onPressSubmit}
              style={{ height: 56 }}
              fontSize={16}
              title="Submit Review"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 16,
    backgroundColor: "red",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  input: {
    height: 140,
    marginTop: 32,
    backgroundColor: "#FBFBFB",
    borderWidth: 1,
    borderColor: "#F5F5F8",
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 16,
  },
  greenCirle: {
    backgroundColor: "#27AE60",
    height: 7,
    width: 7,
    borderRadius: 3.5,
    marginRight: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  ratingContainer: {
    alignItems: "center",
    marginTop: 32,
  }
});
