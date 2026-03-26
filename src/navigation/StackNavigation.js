import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/authScreen/SplashScreen";
import LoginScreen from "../screens/authScreen/LoginScreen";
import RegisterScreen from "../screens/authScreen/RegisterScreen";
import HomeScreen from "../screens/appScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
  );
};

export default StackNavigation;