import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import LifeCycleComponent from "./LifeCycleComponent";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.property !== 3 && (
          <LifeCycleComponent property={this.state.property} />
        )}

        <Button
          title="Send Prop"
          onPress={() => {
            let p  = this.state.property + 1;
            this.setState({ property: p });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
