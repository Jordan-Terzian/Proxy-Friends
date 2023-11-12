import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Heap from "@heap/react-native-heap";
import AppStack from "./appStack";
import AuthStack from "./authStack";
import { NavigationContainer } from "@react-navigation/native";
import { UserContextProvider } from "../context/userContext";
import { QueryClient, QueryClientProvider } from "react-query";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const HeapNavigationContainer =
  Heap.withReactNavigationAutotrack(NavigationContainer);

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <HeapNavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="AppStack" component={AppStack} />
          </Stack.Navigator>
        </HeapNavigationContainer>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default Main;
