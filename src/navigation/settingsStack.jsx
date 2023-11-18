
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsHomeScreen from "../screens/settingsStack/settingsHomeScreen";
import SecurityAndPrivacyScreen from "../screens/settingsStack/security&PrivacyScreen";

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
            <Stack.Screen name="SecurityAndPrivacy" component={SecurityAndPrivacyScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;