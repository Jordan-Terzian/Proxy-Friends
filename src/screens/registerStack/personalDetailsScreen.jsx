import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import TextInputIcon from '../../components/molecules/textInput';
import Metrics from '../../constants/metrics';
import DatePickerField from '../../components/molecules/datePickerField';
import CheckboxGroup from '../../components/molecules/checkBoxGroup';

import createRegisterStyles from '../styles/registerStackStyles';


const genderOptions = ['Male', 'Female', 'Prefer not to say', 'Other']

const PersonalDetailsScreen = () => {
    const RegisterStyles = createRegisterStyles();

    const [gender, setGender] = useState('');
    const [otherText, setOtherText] = useState('');
    const [showOtherTextInput, setShowOtherTextInput] = useState(false);

    const handleGenderChange = (value) => {
        setGender(value);
        setShowOtherTextInput(value === 'Other');
    };



    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                nextScreen="CustomiseYourProfile"
                currentStep={2} 
                totalSteps={6} 
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
                        <DatePickerField placeholder="dd/mm/yyyy" />
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
                        {gender === 'Other' && <TextInputIcon placeholder="Other..."/>}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default PersonalDetailsScreen;