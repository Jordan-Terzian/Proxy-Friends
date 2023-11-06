import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Heap from "@heap/react-native-heap";
import AppStack from "./appStack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HeapNavigationContainer =
  Heap.withReactNavigationAutotrack(NavigationContainer);

const Main = () => {
  return (
    <HeapNavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </HeapNavigationContainer>
  );
};

export default Main;
