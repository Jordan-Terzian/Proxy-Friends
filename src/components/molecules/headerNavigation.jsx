// HeaderNavigation.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import ProgressBar from '../atoms/progressBar';
import IconButton from '../atoms/iconButton';
import BackNextButton from '../atoms/backNextButton';

const HeaderNavigation = ({
    backLabel = 'Back',
    headerBackVisible = true,
    headerNextVisible = true,
    addButtonVisible = false,
    onAddPress,
    nextLabel = 'Next',
    nextScreen,
    validate,
    currentStep,
    totalSteps,
    // ... any other props you need
}) => {
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

                {/* Progress bar */}
                <View style={styles.progressBarContainer}>
                    <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                </View>

                {/* Next or Add button */}
                <View style={styles.sideContainer}>
                    {headerNextVisible && (
                        <BackNextButton
                            direction="next"
                            label={nextLabel}
                            labelVisible={true}
                            nextScreen={nextScreen}
                            validate={validate}
                            // ... any other props you need
                        />
                    )}
                    {addButtonVisible && (
                        <IconButton
                            icon="plus"
                            onPress={onAddPress}
                            size={24}
                            // ... any other props you need
                        />
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
    // ... any other styles you need
});

export default HeaderNavigation;
