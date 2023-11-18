import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import CheckboxGroup from '../../components/molecules/checkBoxGroup';
import { useNavigation } from '@react-navigation/native';

const colourOptions = ['Dark', 'Light', 'System Default']

const AccessibilityScreen = () => {

    const [highContrast, setHighContrast] = useState(false);
    const toggleHighContrast = () => setHighContrast(previousState => !previousState);

    const navigation = useNavigation();
    const SettingsStackStyles = createSettingsStackStyles();

    const [colourMode, setColourMode] = useState('');

    const handleColorModeChange = (value) => {
        setColourMode(value);
    };

    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Accessibility"
                headerBackVisible={true}
                headerNextVisible={false}
                saveVisible={true}
                onPress={() => navigation.goBack()}
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ paddingTop: 20 }}>
                <View style={SettingsStackStyles.pageContainer}>
                    <View style={SettingsStackStyles.section}>
                        <View style={styles.headerWithSwitch}>
                            <Text style={SettingsStackStyles.header2}>
                                High Contrast
                            </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#5BC236" }}
                                thumbColor={"#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleHighContrast}
                                value={highContrast}
                            />
                        </View>
                        <Text style={SettingsStackStyles.subtitle}>
                            Do you require increased contrat on buttons and text?
                        </Text>
                    </View>
                    <View style={SettingsStackStyles.section}>
                        <Text style={SettingsStackStyles.header2}>
                            Colour Scheme
                        </Text>
                        <CheckboxGroup
                            options={colourOptions}
                            onOptionChange={handleColorModeChange}
                            selectedOption={colourMode}
                        />
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );
}

export default AccessibilityScreen;

// Add this style for the header with the switch
const styles = StyleSheet.create({
    headerWithSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
});

