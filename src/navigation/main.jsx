import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./appStack";
import AuthStack from "./authStack";
import { NavigationContainer } from "@react-navigation/native";
import { UserContextProvider } from "../context/userContext";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from "react-native-error-boundary";
import { ThemeProvider } from "../context/themeContext";
import ErrorFallbacComponent from "../components/organisms/errorFallback";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallbacComponent}>
        <ThemeProvider>
          <UserContextProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="AppStack" component={AppStack} />
              </Stack.Navigator>
            </NavigationContainer>
          </UserContextProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default Main;
