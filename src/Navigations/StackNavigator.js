import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from '../Screens/Login/Login';
import { Main } from '../Screens/Login/MainScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator }