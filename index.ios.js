/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

const createProfile = () => {
  Alert.alert("You're going places kid");
}

export default class wanderlust extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          wanderlust
        </Text>
        <Button
          onPress={createProfile}
          title="get started"
          color="#000000"
          accessibilityLabel="Create a user profile"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 48,
    textAlign: 'center',
    margin: 30,
  },
  getStarted: {

  }
});

AppRegistry.registerComponent('wanderlust', () => wanderlust);
