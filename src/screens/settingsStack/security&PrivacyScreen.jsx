import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import CheckboxGroup from '../../components/molecules/checkBoxGroup';
import { useNavigation } from '@react-navigation/native';

const privacyOptions = ['Public', 'Friends Only']

const SecurityAndPrivacyScreen = () => {

    const navigation = useNavigation();
    const SettingsStackStyles = createSettingsStackStyles();

    const [privacy, setPrivacy] = useState('');

    const handlePrivacyChange = (value) => {
        setPrivacy(value);
    };

    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Security & Privacy"
                headerBackVisible={true}
                headerNextVisible={false}
                saveVisible={true}
                onPress={() => navigation.goBack()}
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ paddingTop: 20 }}>
                <View style={SettingsStackStyles.pageContainer}>
                    <View style={SettingsStackStyles.section}>
                        <Text style={SettingsStackStyles.header2}>
                            Privacy
                        </Text>
                        <Text style={SettingsStackStyles.subtitle}>
                            When set to “public”, users will be able to see:
                            {"\n"}{`    \u2022`} name
                            {"\n"}{`    \u2022`} age
                            {"\n"}{`    \u2022`} gender
                            {"\n"}{`    \u2022`} bio
                            {"\n"}{`    \u2022`} interests
                            {"\n"}{`    \u2022`} social accounts
                            {"\n"}When set to “Friends Only”, un-matched users will be
                            able to see:
                            {"\n"}{`    \u2022`} name
                            {"\n"}{`    \u2022`} gender
                            {"\n"}{`    \u2022`} bio
                            {"\n"}{`    \u2022`} interests
                        </Text>
                        <CheckboxGroup
                            options={privacyOptions}
                            onOptionChange={handlePrivacyChange}
                            selectedOption={privacy}
                        />
                    </View>
                    <View style={SettingsStackStyles.section}>
                        <Text style={SettingsStackStyles.header2}>
                            Blocked Users
                        </Text>
                        <Text style={SettingsStackStyles.subtitle}>
                            You have not blocked any users.
                        </Text>
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );
}

export default SecurityAndPrivacyScreen;

