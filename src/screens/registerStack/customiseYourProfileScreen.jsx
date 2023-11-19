import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import TextInputIcon from '../../components/molecules/textInput';
import Metrics from '../../constants/metrics';

import createRegisterStyles from '../styles/registerStackStyles';

import defaultProfile from '../../assets/images/defaultProfile.png';
import UseToggle from '../../utils/useToggle';
import ModalImagePicker from '../../components/molecules/modalImagePicker';
import ImageButton from '../../components/atoms/imageButton';
import BioInputField from '../../components/molecules/textInputMultiLine';
import { useNavigation } from '@react-navigation/native';


const CustomiseYourProfileScreen = ({ route }) => {

    const RegisterStyles = createRegisterStyles();
    const navigation = useNavigation();
    const initialImage = Image.resolveAssetSource(defaultProfile).uri;
    const { value: slideMenu, toggleValue: toggleSlideMenu } = UseToggle();
    const [image, setImage] = useState(initialImage);
    const [bio, setBio] = useState('');
    const [name, setName] = useState('');

    const { email, username, password, dateOfBirth, gender } = route.params;

    const isNextEnabled = name && bio && image;

    const goToNextScreen = () => {
        navigation.navigate('Verification', {
            email, 
            username,
            password,
            dateOfBirth, 
            gender,
            name,
            bio,
            image
        });
    }


    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                onNext={goToNextScreen}
                currentStep={3} 
                totalSteps={6} 
                isNextEnabled={isNextEnabled}
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={RegisterStyles.underHeaderContainer}>
                    <Text style={RegisterStyles.header1}>
                        CUSTOMISE YOUR PROFILE
                    </Text>
                </View>
                <View style={RegisterStyles.container}>
                    <Text style={RegisterStyles.subtitle}>
                        Enter the details that will appear on your PROXY Friends profile. These details can be changed at any time.
                    </Text>

                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            PROFILE PICTURE
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
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            NAME
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            Enter a name that you want displayed on your profile. 
                        </Text>
                        <TextInputIcon
                            placeholder="Enter Name"
                            style={{ width: '90%' }}
                            icon ="account-outline"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            BIO
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            Enter a small descirption that you want displayed on your profile. 
                        </Text>
                        <BioInputField
                            placeholder="Enter Bio"
                            inputLimit={150}
                            value={bio}
                            onChangeText={setBio}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default CustomiseYourProfileScreen;

const styles = StyleSheet.create({
    profilePictureContainer: {
        alignItems: 'center',
        flexDirection: 'column-reverse',
        alignSelf: 'center'
    },
});

