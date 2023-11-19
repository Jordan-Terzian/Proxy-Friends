import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';


const genderOptions = ['Male', 'Female', 'Prefer not to say', 'Other']

const EditProfileScreen = () => {


    const [userData, setUserData] = useState(null);

    const defaultUserData = {
        bio: "Actor and Male model. I was in barbie, that was pretty cool",
        dateOfBirth: "2002-10-19T07:01:54.207Z",
        email: "ryan@email.com",
        gender: "Male",
        image: "https://placekitten.com/200/200",
        username: "ryangosling",
        name: "Ryan Gosling",
        selectedInterests: ["Video games", "Movies", "Marvel", "Martial Arts", "Gym", "Politics"],
    };

    console.log(userData)

    const isStandardGenderOption = ['Male', 'Female', 'Prefer not to say'].includes(userData?.gender);
    const navigation = useNavigation();
    const SettingsStackStyles = createSettingsStackStyles();

    const initialImage = Image.resolveAssetSource(defaultProfile).uri;
    const { value: slideMenu, toggleValue: toggleSlideMenu } = UseToggle();

    const [name, setName] = useState(userData?.name || '');
    const [email, setEmail] = useState(userData?.email || '');
    const [username, setUsername] = useState(userData?.username || '');
    const [bio, setBio] = useState(userData?.bio || '');
    const [interests, setInterests] = useState(userData?.selectedInterests.map(interest => ({ name: interest })) || []);
    const [image, setImage] = useState(userData?.image || initialImage);
    const [gender, setGender] = useState(isStandardGenderOption ? userData?.gender : 'Other');
    const [otherText, setOtherText] = useState(isStandardGenderOption ? '' : userData?.gender);
    const [showOtherTextInput, setShowOtherTextInput] = useState(!isStandardGenderOption);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userDataJson = await AsyncStorage.getItem('@userData');
                let data = userDataJson != null ? JSON.parse(userDataJson) : null;

                if (!data) {
                    await AsyncStorage.setItem('@userData', JSON.stringify(defaultUserData));
                    data = defaultUserData;
                }

                // Determine if the gender is one of the standard options
                const isStandardGenderOption = ['Male', 'Female', 'Prefer not to say'].includes(data.gender);

                // Update state variables
                setUserData(data);
                setName(data.name);
                setEmail(data.email);
                setUsername(data.username);
                setBio(data.bio);
                setInterests(data.selectedInterests.map(interest => ({ name: interest })));
                setImage(data.image);
                setGender(isStandardGenderOption ? data.gender : 'Other');
                setOtherText(isStandardGenderOption ? '' : data.gender);
                setShowOtherTextInput(!isStandardGenderOption);
            } catch (e) {
                console.log('Error reading user data from AsyncStorage:', e);
            }
        };

        getUserData();
    }, []);

    const handleGenderChange = (value) => {
        setGender(value);
        setShowOtherTextInput(value === 'Other');
        if (value !== 'Other') {
            setOtherText(''); // Clear otherText if 'Other' is not selected
        }
    };


    const addNewInterest = (newInterest) => {
        if (newInterest.trim()) {
            setInterests([...interests, { name: newInterest }]);
        }
    };

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    }


    const handleSave = async () => {
        const updatedUserData = {
            ...userData,
            name,
            email,
            username,
            bio,
            gender: gender === 'Other' ? otherText : gender,
            selectedInterests: interests.map(interest => interest.name),
            image
        };

        try {
            await AsyncStorage.setItem('@userData', JSON.stringify(updatedUserData));
            console.log('User data updated successfully');
            navigation.goBack();
        } catch (e) {
            console.log('Error updating user data in AsyncStorage:', e);
        }
    };

    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Edit Profile"
                headerBackVisible={true}
                headerNextVisible={false}
                saveVisible={true}
                onPress={() => handleSave()}
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
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[SettingsStackStyles.header2]}>
                                Email:
                            </Text>
                            <TextInputIcon
                                placeholder="Enter a valid email"
                                style={styles.textInput}
                                value={email}
                                onChangeText={setEmail}
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
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>

                        <Text style={[SettingsStackStyles.header2]}>
                            Bio:
                        </Text>
                        <BioInputField
                            placeholder="Enter Bio"
                            inputLimit={150}
                            value={bio}
                            onChangeText={setBio}
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
                        {showOtherTextInput && (
                            <TextInputIcon
                                placeholder="Other..."
                                value={otherText}
                                onChangeText={setOtherText}
                            />
                        )}
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

