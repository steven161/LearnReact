import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GilroyText from "../../components/GilroyText";
import PropTypes from 'prop-types'

const array = Array.from(Array(112 / 8).keys());
//const array = [0,1,2,3,4,5,6,7,8,9];

class Coupon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left1Container}>
          <View style={styles.leftCircle}></View>
        </View>
        <View style={styles.leftContainer}>
          <Image style={styles.image} source={{uri: this.props.image}} />
        </View>
        <View style={styles.lineContainer}>
          {array.map((item, index) => {
            return <View key={item.id} style={styles.oval}></View>;
          })}
        </View>

        <View style={styles.rightContainer}>
          <GilroyText style={{ fontSize: 12, color: "#525C67" }}>
            <Text>{this.props.companyName}</Text>
          </GilroyText>
          <View height={4}></View>
          <GilroyText
            fontStyle="Bold"
            style={{ fontSize: 24, color: "#111A2C" }}
          >
            <Text>{this.props.saleOff}% Off</Text>
          </GilroyText>
          <View height={4}></View>
          <GilroyText style={{ fontSize: 12, color: "#757D85" }}>
            <Text>{this.props.status === 'Used' ? 'Used on ' : 'Valid until '} {this.props.date}</Text>
          </GilroyText>
        </View>
        <View style={styles.right1Container}>
          <View style={styles.rightCircle}></View>
          <View style={styles.rightCircle}></View>
          <View style={styles.rightCircle}></View>
        </View>
      </View>
    );
  }
}

Coupon.propType = {
    companyName: PropTypes.string,
    saleOff: PropTypes.number,
    date: PropTypes.string,
    image: PropTypes.uri,
};

Coupon.defaultProps= {
    image: 'https://grupohonor.com.br/wp-content/uploads/2015/10/Logo-Default.png',
}

const styles = StyleSheet.create({
  container: {
    height: 112,
    backgroundColor: "#F5F5F8",
    borderRadius: 9,
    flexDirection: "row",
  },
  left1Container: {
    flexDirection: "column",
    justifyContent: "center",
  },
  leftCircle: {
    backgroundColor: "white",
    width: 26,
    height: 26,
    borderRadius: 13,
    marginLeft: -13,
  },
  leftContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    backgroundColor: "red",
    width: 82,
    height: 82,
  },
  lineContainer: {
    width: 2,
    //backgroundColor: 'red',
    flexDirection: "column",
    justifyContent: "space-around",
  },
  oval: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "white",
    transform: [{ scaleY: 2 }],
  },
  rightContainer: {
    flex: 3,
    flexDirection: "column",
    //backgroundColor:'green',
    paddingLeft: 26,
    justifyContent: "center",
  },
  right1Container: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  rightCircle: {
    backgroundColor: "white",
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: -13,
  },
});

export default Coupon;
