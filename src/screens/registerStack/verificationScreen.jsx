import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import Metrics from '../../constants/metrics';

import createRegisterStyles from '../styles/registerStackStyles';

import defaultVerification from '../../assets/images/verificationDefault.png';
import UseToggle from '../../utils/useToggle';
import ModalImagePicker from '../../components/molecules/modalImagePicker';
import ImageButton from '../../components/atoms/imageButton';



const VerificationScreen = () => {

    const RegisterStyles = createRegisterStyles();
    const initialImage = Image.resolveAssetSource(defaultVerification).uri;
    const { value: slideMenu, toggleValue: toggleSlideMenu } = UseToggle();
    const [image, setImage] = useState(initialImage);

    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                nextScreen="LocationDetails"
                currentStep={4} 
                totalSteps={6} 
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={RegisterStyles.underHeaderContainer}>
                    <Text style={RegisterStyles.header1}>
                        VERIFICATION
                    </Text>
                </View>
                <View style={RegisterStyles.container}>
                    <Text style={RegisterStyles.subtitle}>
                        Please attach a selfie of yourself holding a form of legal identification (drivers license, photo card). 
                        We use this information to verify your claimed identity. 
                    </Text>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            VERIFICATION SELFIE
                        </Text>
                        <View style={styles.profilePictureContainer}>
                            <ImageButton
                                size={100}
                                imageUri={image}
                                onPress={toggleSlideMenu}
                            />
                            <ModalImagePicker
                                isVisible={slideMenu}
                                toggleVisibility={toggleSlideMenu}
                                onImagePicked={(uri) => setImage(uri)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default VerificationScreen;

const styles = StyleSheet.create({
    profilePictureContainer: {
        alignItems: 'center',
        flexDirection: 'column-reverse',
        alignSelf: 'center'
    },
});

