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
import AsyncStorage from '@react-native-async-storage/async-storage';
import calculateAge from '../../utils/calculateAge';
import EventModal from '../../components/organisms/pastEventModal';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const defaultUserData = {
    bio: "Actor and Male model. I was in barbie, that was pretty cool",
    dateOfBirth: "2002-10-19T07:01:54.207Z",
    email: "ryan@email.com",
    gender: "Male",
    image: "https://i.insider.com/64a325b16075be0019c28e16?width=700",
    username: "ryangosling",
    name: "Ryan Gosling",
    selectedInterests: ["Video games", "Movies", "Marvel", "Martial Arts", "Gym", "Politics"],
  };

  const handleEventPress = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };

  useFocusEffect(
    useCallback(() => {
      const getUserData = async () => {
        try {
          const userDataJson = await AsyncStorage.getItem('@userData');
          let data = userDataJson != null ? JSON.parse(userDataJson) : null;

          if (!data) {
            // If userData is null, use default data and save it to AsyncStorage
            data = defaultUserData;
            await AsyncStorage.setItem('@userData', JSON.stringify(defaultUserData));
          }

          setUserData(data);
        } catch (e) {
          console.log('Error reading user data from AsyncStorage:', e);
        }
      };

      getUserData();
    }, [])
  );

  console.log(userData)


  const navigation = useNavigation();

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
  return (
    <SafeAreaView style={ProfileStackStyles.safeAreaView} edges={['bottom']}>
      <HeaderNavigation
        title=""
        newIconButtonVisible={true}
        headerBackVisible={false}
        headerNextVisible={false}
        onPress={() => navigation.navigate('SettingsStack')}
        iconName={'cog'}
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
      <EventModal
        isVisible={isModalVisible}
        event={selectedEvent}
        onClose={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
