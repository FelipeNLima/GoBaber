import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes = NavigationContainer(
  createStackNavigator({
    SignIn,
    SignUp,
  })
);

export default Routes;