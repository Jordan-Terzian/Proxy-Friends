import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // material community is deprecating socia media icons hence used this
import createProfileStackStyles from '../styles/profileStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import InterestLabel from '../../components/atoms/interestsLabel';
import PastEvent from '../../components/molecules/pastEvent';

const ProfileScreen = () => {

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
        iconName={'cog'}
      />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://placekitten.com/200/200' }} // Placeholder for profile picture
            style={styles.profilePic}
          />
          <View style={styles.summary}>
            <Text style={styles.name}>Ryan Gosling</Text>
            <Text style={ProfileStackStyles.subtitle}>21, Male</Text>
            <View style={styles.icons}>
              <Ionicons name="logo-facebook" size={24} color="black" style={{ marginRight: 5 }} />
              <Ionicons name="logo-instagram" size={24} color="black" />
            </View>
          </View>
        </View>
        <View style={ProfileStackStyles.container}>
          <View style={ProfileStackStyles.section}>
            <Text style={styles.description}>
              Actor and Male model. I was in barbie, that was pretty cool
            </Text>
          </View>
          <View style={ProfileStackStyles.section}>
            <Text style={ProfileStackStyles.header2}>Interests</Text>
            <InterestLabel interests={interestsData} />
          </View>

          <View style={ProfileStackStyles.section}>
            <Text style={ProfileStackStyles.header2}>Past Events</Text>
            <View style={styles.eventsGrid}>
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

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    padding: 20,
    flexDirection: 'row',
  },
  summary: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 10,
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    marginVertical: 2,
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
});

export default ProfileScreen;
