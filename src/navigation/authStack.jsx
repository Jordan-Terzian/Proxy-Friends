import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import OnboardingScreen from '../screens/authStack/onboardingScreen';
import LoginScreen from '../screens/authStack/loginScreen';
import AuthenticationDetailsScreen from '../screens/registerStack/authenticationDetailsScreen';
import PersonalDetailsScreen from '../screens/registerStack/personalDetailsScreen';
import CustomiseYourProfileScreen from '../screens/registerStack/customiseYourProfileScreen';
import VerificationScreen from '../screens/registerStack/verificationScreen';
import LocationDetailsScreen from '../screens/registerStack/locationDetailsScreen';
import InterestsScreen from '../screens/registerStack/interestsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AuthenticationDetails" component={AuthenticationDetailsScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
        <Stack.Screen name="CustomiseYourProfile" component={CustomiseYourProfileScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
        <Stack.Screen name="Interests" component={InterestsScreen} />
    </Stack.Navigator>;
}

export default AuthStack;