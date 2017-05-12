import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
		<View style={styles.container}>
			<Text style={styles.title}>
				wanderlust
			</Text>
			<Button
				onPress={() => navigate('Login')}
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

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
	return (
		<View style={{padding: 20}}>
			<Text style={{fontSize: 27}}>
				Login
			</Text>
			<TextInput
				style={{height: 60}}
				onChangeText={() => {}}
				placeholder='Username'
			/>		
			<TextInput
				style={{height: 60}}
				onChangeText={() => {}}
				placeholder='Password'
				secureTextEntry={true}
			/>				
			<Button 
				onPress={() => {}}
				title="Submit"
				style={{height: 60}}
			/>
		</View>
	);
  }
}

const wanderlust = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginScreen }
});

AppRegistry.registerComponent('wanderlust', () => wanderlust);
