import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeStack/homeScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{ tab: "People" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
