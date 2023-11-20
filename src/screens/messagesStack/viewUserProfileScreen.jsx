import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // material community is deprecating socia media icons hence used this
import createProfileStackStyles from '../styles/profileStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import InterestLabel from '../../components/atoms/interestsLabel';
import PastEvent from '../../components/molecules/pastEvent';
import { useNavigation } from '@react-navigation/native';
import MessageOverlay from '../../components/organisms/messageOverlay';
import calculateAge from '../../utils/calculateAge';

const ViewUserProfileScreen = ({ route }) => {

    const navigation = useNavigation();

    const userData = route.params.userInfo;

    const pastEventsData = [
        {
            title: 'Bouldering',
            date: '17/03/2023',
            imageUri: { uri: 'https://placekitten.com/100/100' } // Placeholder image
        },
        {
            title: 'Skydiving',
            date: '12/03/2023',
            imageUri: { uri: 'https://placekitten.com/101/101' }
        },
    ];

    const ProfileStackStyles = createProfileStackStyles();


    const [overlayVisible, setOverlayVisible] = useState(false);

    // Functions for overlay actions
    const handleBlock = () => {
        // Logic for blocking
        console.log('Blocking user');
        setOverlayVisible(false);
    };

    const handleReport = () => {
        // Logic for reporting
        console.log('Reporting user');
        navigation.navigate('ReportAProblem', { userIssue: true });
        setOverlayVisible(false);
    };



    return (
        <SafeAreaView style={ProfileStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title=""
                newIconButtonVisible={true}
                headerBackVisible={true}
                headerNextVisible={false}
                onPress={() => setOverlayVisible(true)}
                iconName={'dots-vertical'}
            />
            <ScrollView nestedScrollEnabled={true}>
                <View style={ProfileStackStyles.mainSummary}>
                    <Image
                        source={{ uri: userData?.image }} // Placeholder for profile picture
                        style={ProfileStackStyles.profilePic}
                    />
                    <View style={ProfileStackStyles.summary}>
                        <Text style={ProfileStackStyles.name}>{userData?.name}</Text>
                        <Text style={ProfileStackStyles.subtitle}>
                            {userData?.dateOfBirth ? calculateAge(userData.dateOfBirth) : "N/A"}, {userData?.gender}
                        </Text>
                        <View style={ProfileStackStyles.icons}>
                            <Ionicons name="logo-facebook" size={24} color="black" style={{ marginRight: 5 }} />
                            <Ionicons name="logo-instagram" size={24} color="black" />
                        </View>
                    </View>
                </View>
                <View style={ProfileStackStyles.container}>
                    <View style={ProfileStackStyles.section}>
                        <Text style={ProfileStackStyles.description}>
                            {userData?.bio}
                        </Text>
                    </View>
                    <View style={ProfileStackStyles.section}>
                        <Text style={ProfileStackStyles.header2}>Interests</Text>
                        {userData && userData.selectedInterests && (
                            <InterestLabel interests={userData?.selectedInterests.map(interest => ({ name: interest }))} />
                        )}
                    </View>

                    <View style={ProfileStackStyles.section}>
                        <Text style={ProfileStackStyles.header2}>Past Events</Text>
                        <View style={ProfileStackStyles.eventsGrid}>
                            {pastEventsData.map((event, index) => (
                                <PastEvent key={index} event={event} />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <MessageOverlay
                isVisible={overlayVisible}
                onClose={() => setOverlayVisible(false)}
                name={userData?.name}
                onBlock={handleBlock}
                onReport={handleReport}
            />
        </SafeAreaView>
    );
};

export default ViewUserProfileScreen;
