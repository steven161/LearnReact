import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import GilroyText from "../components/GilroyText";
import Logo from "../components/Logo";

export default class Screen3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.logoContainer}>
          <Logo />
          <View height={64} />
          <Image source={require("./images/3.png")} style={styles.logo} />
        </View>
        <View style={styles.title}>
          <GilroyText
            style={{ fontSize: 24, color: "#111A2C", lineHeight: 32 }}
            fontStyle="SemiBold"
          >
            Receive the Great Food
          </GilroyText>

          <View height={16} />
          <GilroyText>
          You’ll receive the great food within a hour.
          </GilroyText>
          <GilroyText>And get free delivery credits for every order.</GilroyText>
        </View>

        <View style={styles.slideContainer}>
          <View
            style={{
              backgroundColor: "#rgba(255,108,68,0.4)",
              width: 10,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#rgba(255,108,68,0.4)",
              width: 10,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#FF6C44",
              width: 30,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
        </View>
        <View style={{flex:1}}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    alignSelf: "center",
    position: "absolute",
    width: 750,
    height: 750,
    borderRadius: 750 / 2,
    backgroundColor: "rgba(255, 92, 1, 0.2)",
    marginTop: -300,
  },
  logoContainer: {
    marginTop: 48,
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 305,
  },
  title: {
    marginTop: 54,
    alignItems: "center",
  },
  slideContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 40,
  }
});
