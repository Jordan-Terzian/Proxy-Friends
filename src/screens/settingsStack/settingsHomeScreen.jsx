import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import SettingsItem from '../../components/molecules/settingsItem';

const SettingsHomeScreen = () => {
    const SettingsStackStyles = createSettingsStackStyles();
    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Settings"
                headerBackVisible={true}
                headerNextVisible={false}
            />
            <ScrollView>
                <View style={SettingsStackStyles.container}>
                    <SettingsItem
                        iconName="account-edit"
                        text="Edit Profile"
                        nextScreen=""
                    />
                    <SettingsItem
                        iconName="security"
                        text="Security & Privacy"
                        nextScreen="SecurityAndPrivacy"
                    />
                    <SettingsItem
                        iconName="wheelchair-accessibility"
                        text="Accessibility"
                        nextScreen="Accessibility"
                    />
                    <SettingsItem
                        iconName="bug"
                        text="Report a problem"
                        nextScreen="ReportAProblem"
                    />
                    <SettingsItem
                        iconName="account-box-multiple"
                        text="Linked Accounts"
                        nextScreen="LinkedAccounts"
                    />
                    <SettingsItem
                        iconName="logout"
                        text="Logout"
                        nextScreen="Onboarding"
                    />
                    <SettingsItem
                        iconName="delete"
                        text="Delete Account"
                        nextScreen="onboarding"
                    />


                </View>


            </ScrollView>

        </SafeAreaView>

    );
}

export default SettingsHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});