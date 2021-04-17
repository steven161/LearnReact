import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GilroyText from "../../components/GilroyText";
import SelectedButton from "../../components/SelectedButton";
import PropTypes from "prop-types";

class LatestOrder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.productNameContainer}>
              <GilroyText
                style={{ fontSize: 16, color: "#111A2C" }}
                fontStyle="SemiBold"
              >
                <Text>{this.props.companyName}</Text>
              </GilroyText>

              <GilroyText>
                <Text
                  style={{ fontSize: 16, color: "#FF6C44" }}
                  fontStyle="SemiBold"
                >
                  ${this.props.price}
                </Text>
              </GilroyText>
            </View>

            <View flexDirection="row" alignItems="center">
             <GilroyText style={{ fontSize: 12 }}>
                <Text>{this.props.dateTime}</Text>
              </GilroyText>
              <View style={styles.smallCirleItem}></View>
              <GilroyText style={{ fontSize: 12 }}>
                <Text>{this.props.numberItems} items</Text>
              </GilroyText>
            </View>

            <View flexDirection="row" alignItems="center">
              <View style={styles.smallCirleStatus}></View>
              <GilroyText style={{ fontSize: 12, color: "#27AE60" }}>
                <Text>{this.props.status}</Text>
              </GilroyText>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <SelectedButton
            title="Re-Order"
            style={{flex: 1, height: 38}}
            selected={true}
            fontSize={12}
          />
          <View width={16} />
          <SelectedButton
            title="Rate"
            style={{flex: 1, height: 38}}
            selected={false}
            fontSize={12}
          />
        </View>
      </View>
    );
  }
}

LatestOrder.propTypes = {
  companyName: PropTypes.string,
  price: PropTypes.number,
  dateTime: PropTypes.string,
  numberItems: PropTypes.number,
  status: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    borderRadius: 16,
    padding: 16,
  },
  infoContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "red",
    width: 36,
    height: 36,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 16,
    marginBottom: 24,
  },
  productNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallCirleItem: {
    backgroundColor: "#757D85",
    width: 4,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  smallCirleStatus: {
    backgroundColor: "#27AE60",
    width: 7,
    height: 7,
    borderRadius: 7,
    marginRight: 8,
  },
});

export default LatestOrder;
