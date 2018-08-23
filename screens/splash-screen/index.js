import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { Label } from '../../components';

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: () => { visible: false }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonJoin}
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate('Register')
            }}>
            <Label style={styles.buttonText}>JOIN NOW</Label>
          </TouchableOpacity>

          <View style={styles.buttonDivider} />

          <TouchableOpacity
            style={styles.buttonJoin}
            onPress={() => {
              this.props.navigation.navigate('Login')
            }}
            activeOpacity={0.8}>
            <Label style={styles.buttonText}>LOG IN</Label>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: '#ff3163'
  },
  buttonJoin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDivider: {
    borderRightWidth: 1,
    borderColor: '#f4f4f4'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Avenir-Heavy',
    color: '#ffffff'
  }
});

export default SplashScreen;