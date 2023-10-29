import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapHomeScreen from "../screens/mapStack/mapHomeScreen";

const Stack = createStackNavigator();

const MapStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MapHome" component={MapHomeScreen} />
        </Stack.Navigator>
    );
}

export default MapStack;