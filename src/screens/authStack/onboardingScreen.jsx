import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import authStyles from '../styles/authStackStyles';

import Metrics from '../../constants/metrics';
import ShapedButton from '../../components/atoms/shapedButton';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={authStyles.safeAreaView} edges={[]}>
      <View style={[authStyles.container, styles.container]}>
        <Text style={styles.headerTextStyle}>
          PROXY Friends
        </Text>
        <ShapedButton
          label="Sign in with Apple"
          onPress={() => navigation.navigate('AppStack')}
          image={require('../../assets/images/SSO/apple.png')}
          rectangular={true}
        />
        <ShapedButton
          label="Sign in with Google"
          onPress={() => navigation.navigate('AppStack')}
          image={require('../../assets/images/SSO/google.png')}
          rectangular={true}

        />
        <ShapedButton
          label="Sign in with Email"
          onPress={() => navigation.navigate('Login')}
          image={require('../../assets/images/SSO/email.png')}
          rectangular={true}
        />

        <View style={styles.registerContainer}>
          <Text>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AuthenticationDetails')}>
            <Text style={styles.registerLink}> Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView >
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: Metrics.screenHeight * 0.015,
    marginTop: Metrics.screenHeight * 0.2,
  },
  headerTextStyle: {
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 20
  },
  registerLink: {
    color: '#5495FF', 
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 15,
  },

});

export default OnboardingScreen;