import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import EditableTimer from "./EditableTimer";
import ToggleableTimerForm from "./ToggleableTimerForm";
import uuidv4 from "uuid/v4";
import { newTimer } from "./utils/TimerUtils";

export default class index extends Component {
  state = {
    timers: [
      {
        title: "Mow the lawn1",
        project: "House Chores",
        id: uuidv4(),
        elapsed: 5456099,
        isRunning: true ,
      },
      {
        title: "Bake Squash",
        project: "Kitchen Chores",
        id: uuidv4(),
        elapsed: 1273998,
        isRunning: false,
      },
    ],
  };

  componentDidMount() {
    const TIME_INTERVAL = 1000;
    this.intervalId = setInterval(() => {
      const { timers } = this.state;

      this.setState({
        timers: timers.map((timer) => {
          const { elapsed, isRunning } = timer;
          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      });
    }, TIME_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleCreateFormSubmit = (timer) => {
    const { timers } = this.state;
    this.setState({
      timers: [newTimer(timer), ...timers],
    });
  };

  handleFormSubmit = (attrs) => {
    const { timers } = this.state;
    this.setState({
      timers: timers.map((timer) => {
        if (timer.id === attrs.id) {
          const { title, project } = attrs;
          return {
            ...timer,
            title,
            project,
          };
        }
        return timer;
      }),
    });
  };

  handleFormRemove = (timeId) => {
    const { timers } = this.state;
    this.setState({
      timers: timers.filter((t) => t.id !== timeId),
    });
  };

  toggleTimer = (timerId) => {
    this.setState((prevState) => {
      const { timers } = prevState;
      return {
        timers: timers.map((timer) => {
          const { id, isRunning } = timer;
          if (id === timerId) {
            return { ...timer, isRunning: !isRunning };
          }
          return timer;
        }),
      };
    });
  };

  render() {
    const { timers } = this.state;

    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.timerListContainer}
        >
          <ScrollView style={styles.timerList}>
            <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
            {timers.map(({ title, project, id, elapsed, isRunning }) => (
              <EditableTimer
                key={id}
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                isRunning={isRunning}
                onFormSubmit={this.handleFormSubmit}
                onRemovePress={this.handleFormRemove}
                onStartPress={this.toggleTimer}
                onStopPress={this.toggleTimer}
              />
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 8,
  },
  timerListContainer: {
    flex: 2,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d6d7da",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  timerList: {
    paddingBottom: 15,
  },
});
