
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsHomeScreen from "../screens/settingsStack/settingsHomeScreen";
import SecurityAndPrivacyScreen from "../screens/settingsStack/security&PrivacyScreen";
import AccessibilityScreen from "../screens/settingsStack/accessibilityScreen";

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
            <Stack.Screen name="SecurityAndPrivacy" component={SecurityAndPrivacyScreen} />
            <Stack.Screen name="Accessibility" component={AccessibilityScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;