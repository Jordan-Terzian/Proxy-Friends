import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/profileStack/profileScreen";
import SettingsStack from "./settingsStack";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SettingsStack" component={SettingsStack} />
        </Stack.Navigator>
    );
}

export default ProfileStack;