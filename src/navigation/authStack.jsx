import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/authStack/onboardingScreen';
import LoginScreen from '../screens/authStack/loginScreen';
import AuthenticationDetailsScreen from '../screens/registerStack/authenticationDetailsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AuthenticationDetails" component={AuthenticationDetailsScreen} />
    </Stack.Navigator>;
}

export default AuthStack;