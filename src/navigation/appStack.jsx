import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStack from "./homeStack";
import MapStack from "./mapStack";
import MessagesStack from "./messagesStack";
import ProfileStack from "./profileStack";
import AddEventScreen from "../screens/addEventStack/addEventScreen";
import AddEventStack from "./addEventStack";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-variant" : "home-variant";
          } else if (route.name === "Map") {
            iconName = focused ? "map-marker" : "map-marker";
          } else if (route.name === "Add Event") {
            iconName = focused ? "calendar-plus" : "calendar-plus";
          } else if (route.name === "Messages") {
            iconName = focused ? "message" : "message";
          } else if (route.name === "Profile") {
            iconName = focused ? "account" : "account";
          }

          // Library containing icons
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#5495FF",
        tabBarInactiveTintColor: "#535353",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1, // Set the border top width
          borderTopColor: "#D6D2D1", // Set the border top color
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Map" component={MapStack} />
      <Tab.Screen name="Add Event" component={AddEventStack} />
      <Tab.Screen name="Messages" component={MessagesStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AppStack;
