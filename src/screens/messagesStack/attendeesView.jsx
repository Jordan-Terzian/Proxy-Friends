import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import createMessageStackStyles from '../styles/messageStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import AttendeesItem from '../../components/molecules/attendeesItem';


const AttendeesView = ({ route }) => {
    const MessageStackStyles = createMessageStackStyles();

    const { attendees } = route.params;

    return (
        <SafeAreaView style={MessageStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Attendees"
                headerBackVisible={true}
                headerNextVisible={false}
            />
            <ScrollView>
                {attendees.map((attendee, index) => (
                    <AttendeesItem key={index} message={attendee} />
                ))}

            </ScrollView>
        </SafeAreaView>
    );
}

export default AttendeesView;


