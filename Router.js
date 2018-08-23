import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import  {
  AuthLoadingScreen,
  HomeScreen,
  OtherScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen
}  from './screens';

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });

const AuthStack = createStackNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
  Register: RegisterScreen
}, {
  initialRouteName: 'Splash'
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);