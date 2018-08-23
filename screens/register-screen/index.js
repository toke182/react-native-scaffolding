import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Join Now View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default RegisterScreen;