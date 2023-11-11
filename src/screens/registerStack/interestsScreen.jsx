import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import Metrics from '../../constants/metrics';

import createRegisterStyles from '../styles/registerStackStyles';

const InterestsScreen = () => {

    const RegisterStyles = createRegisterStyles();

    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                nextScreen="LocationDetails"
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={RegisterStyles.underHeaderContainer}>
                    <Text style={RegisterStyles.header1}>
                        INTERESTS
                    </Text>
                </View>
                <View style={RegisterStyles.container}>
                    <Text style={RegisterStyles.subtitle}>
                        Please Choose at leat 3 interests, or enter your own. 
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default InterestsScreen;

const styles = StyleSheet.create({

});

