import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // material community is deprecating socia media icons hence used this
import createProfileStackStyles from '../styles/profileStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import InterestLabel from '../../components/atoms/interestsLabel';
import PastEvent from '../../components/molecules/pastEvent';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();
  const interestsData = [
    { "name": "Video games" },
    { "name": "Movies" },
    { "name": "Marvel" },
    { "name": "Martial Arts" },
    { "name": "Gym" },
    { "name": "Politics" },
  ];

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
            source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder for profile picture
            style={ProfileStackStyles.profilePic}
          />
          <View style={ProfileStackStyles.summary}>
            <Text style={ProfileStackStyles.name}>Ryan Gosling</Text>
            <Text style={ProfileStackStyles.subtitle}>21, Male</Text>
            <View style={ProfileStackStyles.icons}>
              <Ionicons name="logo-facebook" size={24} color="black" style={{ marginRight: 5 }} />
              <Ionicons name="logo-instagram" size={24} color="black" />
            </View>
          </View>
        </View>
        <View style={ProfileStackStyles.container}>
          <View style={ProfileStackStyles.section}>
            <Text style={ProfileStackStyles.description}>
              Actor and Male model. I was in barbie, that was pretty cool
            </Text>
          </View>
          <View style={ProfileStackStyles.section}>
            <Text style={ProfileStackStyles.header2}>Interests</Text>
            <InterestLabel interests={interestsData} />
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
