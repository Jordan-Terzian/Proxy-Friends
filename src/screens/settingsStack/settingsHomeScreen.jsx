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
                        nextScreen=""
                    />
                    <SettingsItem
                        iconName="wheelchair-accessibility"
                        text="Accessibility"
                        nextScreen=""
                    />
                    <SettingsItem
                        iconName="bug"
                        text="Report a problem"
                        nextScreen=""
                    />
                    <SettingsItem
                        iconName="account-box-multiple"
                        text="Linked Accounts"
                        nextScreen=""
                    />
                    <SettingsItem
                        iconName="logout"
                        text="Logout"
                        nextScreen=""
                    />
                    <SettingsItem
                        iconName="delete"
                        text="Delete Account"
                        nextScreen=""
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