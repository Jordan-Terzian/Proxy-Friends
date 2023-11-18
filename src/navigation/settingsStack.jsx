
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsHomeScreen from "../screens/settingsStack/settingsHomeScreen";

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;