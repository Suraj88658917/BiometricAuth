import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/appScreen/HomeScreen";
import ContactsScreen from "../screens/appScreen/ContactsScreen";
import ImageCaching from "../screens/appScreen/ImageCaching";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="ImageCaching" component={ImageCaching} />
    </Tab.Navigator>
  );
};

export default TabNavigation;