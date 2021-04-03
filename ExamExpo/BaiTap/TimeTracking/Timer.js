import { View, Text, StyleSheet } from "react-native";
import TimerButton from "./TimerButton";
import { millisecondsToHuman } from "./utils/TimerUtils";
import PropTypes from 'prop-types'
import React, { Component } from "react";

export default class Timer extends Component {
  

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
  };

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;
    onRemovePress(id);
  };

  handleStartPress = () => {
    const { id, onStartPress } = this.props;
    onStartPress(id);
  };

  handleStopPress = () => {
    const { id, onStopPress } = this.props;
    onStopPress(id);
  };

  renderActionButton() {
      const {isRunning} = this.props;
      if(isRunning){
          return (
          <TimerButton color="#bd2828" title="Stop" onPress={this.handleStopPress} />
          );
      } else {
          return (
            <TimerButton color="#21ba45" title="Start" onPress={this.handleStopPress}/>
          );
      }
  }

  render() {
    const { title, project, elapsed, onEditPress } = this.props;
    const elapsedString = millisecondsToHuman(elapsed);

    return (
      <View style={styles.timerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{project}</Text>
        <Text style={styles.elapsedTime}>{elapsedString}</Text>
        <View style={styles.buttonGroup}>
          <TimerButton color="blue" small title="Edit" onPress={onEditPress} />
          <TimerButton
            color="blue"
            small
            title="Remove"
            onPress={this.handleRemovePress}
          />
        </View>
        
        {this.renderActionButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    borderColor: "#d6d7da",
    borderWidth: 1,
    padding: 8,
    margin: 16,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  elapsedTime: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
