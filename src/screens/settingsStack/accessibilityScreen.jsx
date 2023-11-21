import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import CheckboxGroup from '../../components/molecules/checkBoxGroup';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/themeContext';

const colourOptions = ['Dark', 'Light', 'System Default']


// Hi Eric, I didn't get to do the entire application in dark mode and high contrast due to spending a lot of 
// time fixing other group members code. I did however manage to get the accessibility screen to work with it. 
// Not sure if this is worth anything but in a full release you'd use a theme provider to keep track of the state 
// of the application and change the colour (state) based on the user's preference. 

const AccessibilityScreen = () => {

    const toggleHighContrast = () => setHighContrast(previousState => !previousState);

    const navigation = useNavigation();
    const [colourMode, setColourMode] = useState('Light');
    const { theme, setTheme, highContrast, setHighContrast } = useTheme(); 

    // Apply the theme styles dynamically
    const SettingsStackStyles = createSettingsStackStyles(theme);
    const dynamicStyles = {
        safeAreaView: {
            backgroundColor: theme === 'Dark' ? '#191414' : 'white',
        },
        text: {
            color: theme === 'Dark' ? 'white' : 'black',
        },
        subtitle: {
            color: theme === 'Dark' ? 'white' : '#636363',
        }, 
        header2: {
            color: theme === 'Dark' ? 'white' : 'black',
        },
    }

    const highContrastStyles = {
        subtitle: {
            color: highContrast && theme === 'Dark' ? 'white' : (highContrast ? 'black' : (theme === 'Dark' ? 'white' : '#636363')),
        },
        // Define other high contrast styles as needed
      };

    const handleColorModeChange = (value) => {
        setColourMode(value);
        setTheme(value); // Update the theme based on selected color mode
    };

    return (
        <SafeAreaView style={[SettingsStackStyles.safeAreaView, dynamicStyles.safeAreaView]} edges={['bottom']}>
            <HeaderNavigation
                title="Accessibility"
                headerBackVisible={true}
                headerNextVisible={false}
                saveVisible={true}
                isSaveEnabled={true}
                onPress={() => { navigation.goBack(); setTheme('Light'); setHighContrast(false)} }
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ paddingTop: 20 }}>
                <View style={SettingsStackStyles.pageContainer}>
                    <View style={SettingsStackStyles.section}>
                        <View style={styles.headerWithSwitch}>
                            <Text style={[SettingsStackStyles.header2, dynamicStyles.header2]}>
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
                        <Text style={[SettingsStackStyles.subtitle, dynamicStyles.subtitle, highContrastStyles.subtitle]}>
                            Do you require increased contrast on buttons and text?
                        </Text>
                    </View>
                    <View style={SettingsStackStyles.section}>
                        <Text style={[SettingsStackStyles.header2, dynamicStyles.header2]}>
                            Colour Scheme
                        </Text>
                        <CheckboxGroup
                            options={colourOptions}
                            onOptionChange={handleColorModeChange}
                            selectedOption={colourMode}
                            dark={theme === 'Dark'}
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

