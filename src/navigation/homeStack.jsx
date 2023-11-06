import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PeopleScreen from "../screens/homeStack/peopleScreen";
import ActivityScreen from "../screens/homeStack/activityScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="People" component={PeopleScreen} />
      <Stack.Screen name="Activities" component={ActivityScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
