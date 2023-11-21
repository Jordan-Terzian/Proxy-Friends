// HeaderNavigation.js
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import ProgressBar from '../atoms/progressBar';
import IconButton from '../atoms/iconButton';
import BackNextButton from '../atoms/backNextButton';
import { useTheme } from '../../context/themeContext';

const HeaderNavigation = ({
    backLabel = 'Back',
    headerBackVisible = true,
    headerNextVisible = true,
    newIconButtonVisible = false,
    onPress,
    iconName,
    nextLabel = 'Next',
    currentStep,
    totalSteps,
    title,
    saveVisible = false,
    isSaveEnabled,
    isNextEnabled,
    onNext,
}) => {
    const showProgressBar = typeof currentStep === 'number' && typeof totalSteps === 'number';

    const { theme } = useTheme();

    const styles = createStyles(theme)
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                {/* Back button */}
                <View style={styles.sideContainer}>
                    {headerBackVisible && (
                        <BackNextButton
                            direction="back"
                            label={backLabel}
                            labelVisible={true}
                            dark = {theme === 'Dark'}
                        />
                    )}
                </View>

                {/* Progress bar, only visible if currentStep and totalSteps are provided */}
                {showProgressBar && (
                    <View style={styles.progressBarContainer}>
                        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                    </View>
                )}

                {/* Title */}
                {!showProgressBar && (
                    <View style={styles.progressBarContainer}>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    </View>
                )}


                {/* Next or Add button */}
                <View style={styles.sideContainer}>
                    {headerNextVisible && (
                        <BackNextButton
                            direction="next"
                            label={nextLabel}
                            labelVisible={true}
                            onPressNext={isNextEnabled ? onNext : null}
                            isDisabled={!isNextEnabled}
        
                        />
                    )}
                    {newIconButtonVisible && (
                        <IconButton
                            icon={iconName}
                            onPress={onPress}
                            size={24}
            
                        />
                    )}
                    {saveVisible && (
                        <TouchableOpacity onPress={onPress} disabled={!isSaveEnabled}>
                            <Text style={[styles.saveText, !isSaveEnabled && styles.disabledSaveText]}>Save</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};
const createStyles = (theme) =>
    StyleSheet.create({
        safeArea: {
            backgroundColor: theme === 'Dark' ? '#191414' : 'white', // or the background color of your header
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 30, 
        },
        sideContainer: {
            width: '15%', // Allocate 15% space for side buttons
            alignItems: 'center', // Center the content horizontally
        },
        progressBarContainer: {
            flex: 1, // Take up the remaining space
            justifyContent: 'center',
            alignItems: 'center', // Center the progress bar horizontally
            marginHorizontal: 50, // Increase this value to shorten the progress bar
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme === 'Dark' ? 'white' : 'black',
        },
        saveText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme === 'Dark' ? 'white' : 'black',

        },
        disabledSaveText: {
            color: '#cccccc',
        },
        // ... any other styles you need
    });

export default HeaderNavigation;
