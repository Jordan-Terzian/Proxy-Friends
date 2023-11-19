import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import LinkedAccountItem from '../../components/molecules/linkedAccountItem';
import IconButton from '../../components/atoms/iconButton';
import { useNavigation } from '@react-navigation/native';
import AddAccountOverlay from '../../components/organisms/addAccountOverlay';

const LinkedAccountsScreen = () => {
    const navigation = useNavigation();
    const SettingsStackStyles = createSettingsStackStyles();

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    }


    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Linked Accounts"
                headerBackVisible={true}
                headerNextVisible={false}
                saveVisible={true}
                onPress={() => navigation.goBack()}
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ paddingTop: 20 }}>
                <View style={SettingsStackStyles.container}>
                    <LinkedAccountItem
                        iconName="logo-facebook"
                        text="Facebook"
                    />
                    <LinkedAccountItem
                        iconName="logo-instagram"
                        text="Instagram"
                    />
                    {/* Add account button */}
                    <IconButton
                        icon="plus"
                        onPress={toggleOverlay}
                        size={15} 
                        style={styles.addAccountButton}
                    />
                </View>
            </ScrollView>
            <AddAccountOverlay
                isVisible={isOverlayVisible}
                onClose={toggleOverlay}
                title="Add Social Link"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    addAccountButton: {
        backgroundColor: '#DDE2F5', 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20, 
    },
});

export default LinkedAccountsScreen;
