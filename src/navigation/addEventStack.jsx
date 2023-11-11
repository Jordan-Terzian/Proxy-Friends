import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddEventScreen from "../screens/addEventStack/addEventScreen";

const Stack = createStackNavigator();

const AddEventStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddEvent" component={AddEventScreen} />
    </Stack.Navigator>
  );
};

export default AddEventStack;
