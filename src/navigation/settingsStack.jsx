
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsHomeScreen from "../screens/settingsStack/settingsHomeScreen";
import SecurityAndPrivacyScreen from "../screens/settingsStack/security&PrivacyScreen";
import AccessibilityScreen from "../screens/settingsStack/accessibilityScreen";
import ReportAProblemScreen from "../screens/settingsStack/reportAProblemScreen";
import LinkedAccountsScreen from "../screens/settingsStack/linkedAccountsScreen";
import EditProfileScreen from "../screens/settingsStack/editProfileScreen";

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
            <Stack.Screen name="SecurityAndPrivacy" component={SecurityAndPrivacyScreen} />
            <Stack.Screen name="Accessibility" component={AccessibilityScreen} />
            <Stack.Screen name="ReportAProblem" component={ReportAProblemScreen} />
            <Stack.Screen name="LinkedAccounts" component={LinkedAccountsScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;