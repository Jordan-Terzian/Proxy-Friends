import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/profileStack/profileScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default ProfileStack;