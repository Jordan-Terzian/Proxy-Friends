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
import EventModal from '../../components/organisms/pastEventModal';

const ViewUserProfileScreen = ({ route }) => {

    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    const userData = route.params.userInfo;

    const handleEventPress = (event) => {
        setSelectedEvent(event);
        setIsModalVisible(true);
    };

    const pastEventsData = [
        {
            title: 'Bouldering',
            date: '17/03/2023 7am-9am',
            imageUri: { uri: 'https://static01.nyt.com/images/2022/05/03/well/22well-bouldering1/22well-bouldering1-mediumSquareAt3X.jpg' },
            location: 'Gosford',
            attendees: "7",
            organizer: "Margot Robbie"
        },
        {
            title: 'Skydiving',
            date: '12/03/2023 2pm-3pm',
            imageUri: { uri: 'https://cdn2.hubspot.net/hubfs/351592/IMG_8804.jpg' },
            location: 'Sydney',
            attendees: "7",
            organizer: "Chris Evans"
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
                                <PastEvent key={index} event={event} onPress={() => handleEventPress(event)} />
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
            <EventModal
                isVisible={isModalVisible}
                event={selectedEvent}
                onClose={() => setIsModalVisible(false)}
            />

        </SafeAreaView>
    );
};

export default ViewUserProfileScreen;
