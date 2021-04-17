import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import axios from "axios";

export default class UseAxios extends Component {
  getAllUsers = () => {
    const url = "https://training.softech.cloud/api/users";
    axios.get(url).then((result) => {
      console.log(result.data);
      console.log(result.data.length);
    });
  };
 
  getUserById = () => {
    const id = "6077a4a006eb8bb360f6eb92";
    const url = "https://training.softech.cloud/api/users/" + id;
    axios.get(url).then((result) => {
      console.log(result.data);
    });
  };

  login = () => {
    const url = "https://training.softech.cloud/api/users/login";
    const data = { email: "test1@gmail.com", password: "12345" };
    axios.post(url, data).then((result) => {
      console.log(result.data);
      console.log(JSON.stringify(result.data));
    });
  };

  register = () => {
    const url = "https://training.softech.cloud/api/users/register";
    const data = {
      email: "steven.nguyen161@gmail.com",
      password: "1234",
      fullname: "Steven Nguyen",
    };
    axios
      .post(url, data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log("Err = " + error);
      });
  };

  forgotPassword = () => {
      const url ='https://training.softech.cloud/api/users/forgot-password';
      const data = {email: 'steven.nguyen161@gmail.com'};
      axios.post(url, data)
      .then((result) => {
          console.log(result.data);
      })
      .catch((error) => {
          console.log(error);
      })
  }

  changePassword = () => {
      const url = 'https://training.softech.cloud/api/users/change-password';
      const data = {email: 'steven.nguyen161@gmail.com', password: '5678', newPassword: '1234'}
      axios.post(url, data)
      .then((result) => {
          console.log(result.data);
      })
      .catch((error) => {
          console.log(error);
      })
  }

  deleteUser = () => {
     const userId = '6077fd04d7b23ff32c719c28';
      const url = 'https://training.softech.cloud/api/users/' +  userId;

      axios.delete(url)
      .then((result) => {
          console.log(result.data);
      })
      .catch((error) => {
          console.log(error);
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="All Users" onPress={this.getAllUsers} />
        <Button title="Get User By ID" onPress={this.getUserById} />
        <Button title="Login" onPress={this.login} />
        <Button title="Register" onPress={this.register} />
        <Button title="Forgot Password" onPress={this.forgotPassword} />
        <Button title="Change Password" onPress={this.changePassword} />
        <Button title="Delete User" onPress={this.deleteUser} />

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
