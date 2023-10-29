import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageHomeScreen from "../screens/messagesStack/messageHomeScreen";

const Stack = createStackNavigator();

const MessagesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MessagesHome" component={MessageHomeScreen} />
        </Stack.Navigator>
    );
}

export default MessagesStack;