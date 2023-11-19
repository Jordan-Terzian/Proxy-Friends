// HeaderNavigation.js
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import ProgressBar from '../atoms/progressBar';
import IconButton from '../atoms/iconButton';
import BackNextButton from '../atoms/backNextButton';

const HeaderNavigation = ({
    backLabel = 'Back',
    headerBackVisible = true,
    headerNextVisible = true,
    newIconButtonVisible = false,
    onPress,
    iconName,
    nextLabel = 'Next',
    validate,
    currentStep,
    totalSteps,
    title,
    saveVisible = false,
    isSaveEnabled,
    onNext
    // ... any other props you need
}) => {
    const showProgressBar = typeof currentStep === 'number' && typeof totalSteps === 'number';
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
                        // ... any other props you need
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
                            onPressNext={onNext}
                            validate={validate}
                        // ... any other props you need
                        />
                    )}
                    {newIconButtonVisible && (
                        <IconButton
                            icon={iconName}
                            onPress={onPress}
                            size={24}
                        // ... any other props you need
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

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white', // or the background color of your header
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30, // Adjust the height as necessary
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
    },
    saveText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledSaveText: {
        color: '#cccccc', 
    },
    // ... any other styles you need
});

export default HeaderNavigation;
