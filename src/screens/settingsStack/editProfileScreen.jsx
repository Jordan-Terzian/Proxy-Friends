import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import CheckboxGroup from '../../components/molecules/checkBoxGroup';
import { useNavigation } from '@react-navigation/native';
import TextInputIcon from '../../components/molecules/textInput';
import UseToggle from '../../utils/useToggle';
import ModalImagePicker from '../../components/molecules/modalImagePicker';
import ImageButton from '../../components/atoms/imageButton';
import BioInputField from '../../components/molecules/textInputMultiLine';
import defaultProfile from '../../assets/images/defaultProfile.png';
import InterestLabel from '../../components/atoms/interestsLabel';
import IconButton from '../../components/atoms/iconButton';
import Overlay from '../../components/organisms/overlay';


const genderOptions = ['Male', 'Female', 'Prefer not to say', 'Other']

const EditProfileScreen = () => {

    const navigation = useNavigation();
    const SettingsStackStyles = createSettingsStackStyles();

    const initialImage = Image.resolveAssetSource(defaultProfile).uri;
    const { value: slideMenu, toggleValue: toggleSlideMenu } = UseToggle();
    const [image, setImage] = useState(initialImage);

    const [gender, setGender] = useState('');
    const [otherText, setOtherText] = useState('');
    const [showOtherTextInput, setShowOtherTextInput] = useState(false);

    const handleGenderChange = (value) => {
        setGender(value);
        setShowOtherTextInput(value === 'Other');
    };

    const [interests, setInterests] = useState([]);

    const addNewInterest = (newInterest) => {
        if (newInterest.trim()) {
            setInterests([...interests, { name: newInterest }]);
        }
    };

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    }

    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Edit Profile"
                headerBackVisible={true}
                headerNextVisible={false}
                saveVisible={true}
                onPress={() => navigation.goBack()}
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ paddingTop: 20 }}>
                <View style={SettingsStackStyles.pageContainer}>
                    <View style={SettingsStackStyles.section}>
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
                    <View style={SettingsStackStyles.section}>
                        <View style={styles.inputContainer}>
                            <Text style={[SettingsStackStyles.header2]}>
                                Full Name:
                            </Text>
                            <TextInputIcon
                                placeholder="Enter Name"
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[SettingsStackStyles.header2]}>
                                Email:
                            </Text>
                            <TextInputIcon
                                placeholder="Enter a valid email"
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[SettingsStackStyles.header2]}>
                                Username:
                            </Text>
                            <TextInputIcon
                                placeholder="Enter username"
                                width="60%"
                                inputLimit={40}
                            />
                        </View>

                        <Text style={[SettingsStackStyles.header2]}>
                            Bio:
                        </Text>
                        <BioInputField
                            placeholder="Enter Bio"
                            inputLimit={150}
                        />
                    </View>
                    <View style={SettingsStackStyles.section}>
                        <Text style={[SettingsStackStyles.header2]}>
                            Gender:
                        </Text>

                        <CheckboxGroup
                            options={genderOptions}
                            selectedOption={gender}
                            onOptionChange={handleGenderChange}
                        />
                        {gender === 'Other' && <TextInputIcon placeholder="Other..." />}
                    </View>

                    <View style={SettingsStackStyles.section}>
                        <Text style={[SettingsStackStyles.header2]}>
                            Interests:
                        </Text>
                        <InterestLabel interests={interests} />
                        <IconButton
                            icon="plus"
                            onPress={toggleOverlay}
                            size={15} 
                            style={styles.addAccountButton}
                        />

                    </View>
                </View>

            </ScrollView>
            <Overlay
                isVisible={isOverlayVisible}
                onClose={toggleOverlay}
                title="Add Interest"
                onSubmit={addNewInterest}
            />

        </SafeAreaView>

    );
}

export default EditProfileScreen;


const styles = StyleSheet.create({
    profilePictureContainer: {
        alignItems: 'center',
        flexDirection: 'column-reverse',
        alignSelf: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginVertical: 10, 
    },
    textInput: {
        width: '70%'
    },
    addAccountButton: {
        backgroundColor: '#DDE2F5', 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20, 
    },
});

