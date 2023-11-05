import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignUp  from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Forgetpassword from '../screens/FogetPassword';
import VerifyOTP from '../screens/VerifyOTP';

const Stack = createStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Signin" component={SignIn} />
          <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
          <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          {/* Add other screens and navigation options here */}
        </Stack.Navigator>
      </NavigationContainer>
    );
};
export default Navigator;