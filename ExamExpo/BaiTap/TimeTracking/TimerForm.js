import { View, Text, TextInput, StyleSheet } from "react-native";
import TimerButton from "./TimerButton";
import React, { Component } from "react";

export default class TimerForm extends Component {
  constructor(props) {
    super(props);

    const { id, title, project } = this.props;

    this.state = {
      title: id ? title : "",
      project: id ? project : "",
    };
  }

  handleChangeTitle = (title) => {
    this.setState({ title });
  };

  handleChangeProject = (project) => {
    this.setState({ project });
  };

  handleSubmit = () => {
    const { onFormSubmit, id } = this.props;
    const { project, title } = this.state;

    onFormSubmit({
      id,
      project,
      title,
    });
  };

  render() {
    const { id, onFormClose } = this.props;
    const { title, project } = this.state;

    const submitText = id ? "Update" : "Create";
    return (
      <View style={styles.formContainer}>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Title</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              value={title}
              onChangeText={this.handleChangeTitle}
            />
          </View>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Project</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              value={project}
              onChangeText={this.handleChangeProject}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TimerButton
            color="#21ba45"
            small
            title={submitText}
            onPress={this.handleSubmit}
          />
          <TimerButton
            color="#db2828"
            small
            title="Cancel"
            onPress={onFormClose}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 1,
    borderRadius: 2,
    padding: 8,
    margin: 16,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
