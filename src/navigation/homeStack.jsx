import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeStack/homeScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return <HomeScreen />;
};

export default HomeStack;
