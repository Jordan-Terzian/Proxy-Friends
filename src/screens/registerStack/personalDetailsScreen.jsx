import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import TextInputIcon from '../../components/molecules/textInput';
import Metrics from '../../constants/metrics';
import DatePickerField from '../../components/molecules/datePickerField';
import CheckboxGroup from '../../components/molecules/checkBoxGroup';

import createRegisterStyles from '../styles/registerStackStyles';
import calculateAge from '../../utils/calculateAge';
import { useNavigation } from '@react-navigation/native';

const genderOptions = ['Male', 'Female', 'Prefer not to say', 'Other']

const PersonalDetailsScreen = ({ route }) => {
    const RegisterStyles = createRegisterStyles();
    const navigation = useNavigation();

    const [gender, setGender] = useState('');
    const [otherText, setOtherText] = useState('');
    const [showOtherTextInput, setShowOtherTextInput] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const isNextEnabled = gender && dateOfBirth;

    const handleDateOfBirthConfirm = (date) => {
        // Convert the date to an ISO string or any other string format you prefer
        setDateOfBirth(date.toISOString());
    };

    const { email, username, password } = route.params;

    const handleGenderChange = (value) => {
        setGender(value);
        setShowOtherTextInput(value === 'Other');
    };

    const goToNextScreen = () => {

        const age = calculateAge(dateOfBirth);
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();

        if (birthDate > currentDate) {
            setErrorMessage("The selected date cannot be in the future.");
            return;
        }

        if (age < 18) {
            setErrorMessage("You must be at least 18 years old.");
            return;
        }

        setErrorMessage(""); // Clear any previous error message

        const finalGender = gender === 'Other' && otherText ? otherText : gender;

        navigation.navigate('CustomiseYourProfile', {
            email,
            username,
            password,
            dateOfBirth,
            gender: finalGender,
        });
    };

    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                onNext={goToNextScreen}
                currentStep={2}
                totalSteps={6}
                isNextEnabled={isNextEnabled}
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={RegisterStyles.underHeaderContainer}>
                    <Text style={RegisterStyles.header1}>
                        PERSONAL DETAILS
                    </Text>
                </View>
                <View style={RegisterStyles.container}>
                    <Text style={RegisterStyles.subtitle}>
                        These are details that we use to better tailor your suggested matches. <Text style={{ fontWeight: 'bold' }}>These details can
                            be changed at any time.</Text>
                    </Text>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            DATE OF BIRTH
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            We use this date to suggest matches based on your age.
                        </Text>
                        <DatePickerField
                            placeholder="dd/mm/yyyy"
                            onConfirm={handleDateOfBirthConfirm}
                            showIcon={true}
                        />
                    </View>
                    <View style={RegisterStyles.section}>
                        <Text style={RegisterStyles.header2}>
                            GENDER
                        </Text>
                        <Text style={RegisterStyles.subtitle}>
                            We use your gender to inform potential matches of your pornouns and gender identity.
                        </Text>
                        <CheckboxGroup
                            options={genderOptions}
                            selectedOption={gender}
                            onOptionChange={handleGenderChange}
                        />
                        {gender === 'Other' && <TextInputIcon placeholder="Other..." value={otherText} onChangeText={setOtherText} />}
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ color: 'red' }}>{errorMessage}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default PersonalDetailsScreen;