import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login View</Text>
      </View>
    );
  }

  _loginAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;