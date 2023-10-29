import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PeopleScreen from "../screens/homeStack/peopleScreen";

const Stack = createStackNavigator();

const PeopleStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="People" component={PeopleScreen} />
        </Stack.Navigator>
    );
}

export default PeopleStack;