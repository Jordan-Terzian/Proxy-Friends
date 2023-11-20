import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageHomeScreen from "../screens/messagesStack/messageHomeScreen";
import MessageChatScreenPerson from "../screens/messagesStack/messageChatScreenPerson";
import ReportAProblemScreen from "../screens/settingsStack/reportAProblemScreen";

const Stack = createStackNavigator();

const MessagesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MessagesHome" component={MessageHomeScreen} />
            <Stack.Screen name="MessageChatPerson" component={MessageChatScreenPerson} />
            <Stack.Screen name="ReportAProblem" component={ReportAProblemScreen} />
        </Stack.Navigator>
    );
}

export default MessagesStack;