import { View, Text, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import TextInputIcon from '../../components/molecules/textInput';
import Metrics from '../../constants/metrics';

import createRegisterStyles from '../styles/registerStackStyles';


const AuthenticationDetailsScreen = () => {
    const RegisterStyles = createRegisterStyles();

    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                nextScreen="PersonalDetails"
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={RegisterStyles.underHeaderContainer}>
                    <Text style={RegisterStyles.header1}>
                        AUTHENTICATION DETAILS
                    </Text>
                </View>
                <View style={RegisterStyles.container}>
                    <Text style={RegisterStyles.subtitle}>
                        These are details that we use to allow you to login, and be uniquely identified.
                    </Text>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            EMAIL
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            Enter a valid email address.
                        </Text>
                        <TextInputIcon
                            placeholder="Enter your email address"
                            style={{ width: '90%' }}
                            icon="email-outline"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            USERNAME
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            Enter a username with only a maximum of 40 alphanumerica characters.
                        </Text>
                        <TextInputIcon
                            placeholder="Enter your username"
                            style={{ width: '90%' }}
                            icon="account-outline"
                            autoCapitalize="none"
                            inputLimit={40}
                        />
                    </View>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            PASSWORD
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            Enter a strong password which has: {'\n'}‎ • a minimum of eight characters {'\n'}‎ • at
                            least one symbol{'\n'}‎ • at least one number
                            {'\n'}‎ • at least one capital letter{'\n'}
                            At least twelve characters are recommended.
                        </Text>
                        <View style = {{ rowGap: Metrics.screenWidth * 0.03 }}>
                            <TextInputIcon
                                placeholder="Enter your password"
                                style={{ width: '90%' }}
                                icon="lock-outline"
                                secureTextEntry
                            />
                            <TextInputIcon
                                placeholder="Re-enter your password"
                                style={{ width: '90%' }}
                                icon="lock-outline"
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AuthenticationDetailsScreen;