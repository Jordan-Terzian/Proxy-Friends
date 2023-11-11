import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderNavigation from '../../components/molecules/headerNavigation';
import Metrics from '../../constants/metrics';

import createRegisterStyles from '../styles/registerStackStyles';
import Overlay from '../../components/organisms/overlay';
import ShapedButton from '../../components/atoms/shapedButton';
import InterestButton from '../../components/atoms/interestsButton';
import { useNavigation } from '@react-navigation/native';

const InterestsScreen = () => {

    const navigation = useNavigation();

    const RegisterStyles = createRegisterStyles();
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const [selectedInterests, setSelectedInterests] = useState([]);

    const [interests, setInterests] = useState([
        'Gaming', 'Soccer', 'Gardening', 'Bouldering', 'Martial Arts', 'Reading', 'Anime', 'Weight Lifting', 'Movies'
    ]); // Now a state

    const addNewInterest = (newInterest) => {
        if (newInterest && !interests.includes(newInterest)) {
            setInterests(prevInterests => [...prevInterests, newInterest]);
            handleInterestPress(newInterest); // This will also select the new interest
        }
    };

    const handleInterestPress = (interest) => {
        setSelectedInterests(prevInterests => {
            const newInterests = prevInterests.includes(interest)
                ? prevInterests.filter(i => i !== interest)
                : [...prevInterests, interest];
            return newInterests;
        });
    };

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <SafeAreaView style={RegisterStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                headerNextVisible={false}
                addButtonVisible={true}
                onAddPress={toggleOverlay} // Pass the handleAddPress function here
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
                <View style={RegisterStyles.section}>
                    <View style={styles.interestsContainer}>
                        {interests.map(interest => ( // Use the interests state here
                            <InterestButton
                                key={interest}
                                label={interest}
                                isSelected={selectedInterests.includes(interest)}
                                onPress={handleInterestPress}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <Overlay
                isVisible={isOverlayVisible}
                onClose={toggleOverlay}
                title="Add Interest"
                onSubmit={addNewInterest}
            />
            <ShapedButton
                label="Register"
                onPress={() => navigation.navigate('AppStack')}
                style = {{alignSelf: 'center'}}
            />

        </SafeAreaView >
    );
}

export default InterestsScreen;

const styles = StyleSheet.create({
    interestsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20
    },
});

