import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import GilroyText from "../../components/GilroyText";
import PropTypes from 'prop-types'

class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.begin} />
        {this.props.data.map((item, index) => {
          return (
            <View key={item.id} style={styles.body}>
              <View style={styles.row}>
                <GilroyText style={{ fontSize: 14, color: "#898B9A" }}>
                  <Text>{item.title}</Text>
                </GilroyText>
                <GilroyText style={{ fontSize: 14, color: "#111A2C"}}>
                  <Text style={{textAlign: "center"}}>{item.description}</Text>
                </GilroyText>
              </View>

              {index < this.props.data.length - 1 && (
                <View style={styles.horizontalLine} />
              )}
            </View>
          );
        })}

        <View style={styles.end} />
      </View>
    );
  }
}

index.propTypes = {
    data : PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
  },
  begin: {
    height: 16,
    backgroundColor: "#FBFBFB",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: "#F5F5F8",
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  body: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#FBFBFB",
    borderColor: "#F5F5F8",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    //height: 56,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    //backgroundColor: 'red',
  },
  horizontalLine: {
    justifyContent: "center",
    alignItems: "stretch",
    height: 1,
    backgroundColor: "#dddddd",
    marginVertical: 16,
    opacity: 0.3,
  },
  end: {
    height: 16,
    backgroundColor: "#FBFBFB",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: "#F5F5F8",
    borderWidth: 1,
    borderTopWidth: 0,
  },
});

export default index;
