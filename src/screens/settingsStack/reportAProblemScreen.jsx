import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import createSettingsStackStyles from '../styles/settingsStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../components/molecules/headerNavigation';
import { useNavigation } from '@react-navigation/native';
import BioInputField from '../../components/molecules/textInputMultiLine';
import ShapedButton from '../../components/atoms/shapedButton';


const ReportAProblemScreen = ({ route }) => {

    const navigation = useNavigation();
    const SettingsStackStyles = createSettingsStackStyles();

    const isUserIssue = route.params?.userIssue ?? false;

    return (
        <SafeAreaView style={SettingsStackStyles.safeAreaView} edges={['bottom']}>
            <HeaderNavigation
                title="Report a problem"
                headerBackVisible={true}
                headerNextVisible={false}
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ paddingTop: 20 }}>
                <View style={SettingsStackStyles.pageContainer}>
                    <View style={SettingsStackStyles.section}>
                        <Text style={SettingsStackStyles.header2}>
                            What Happened?
                        </Text>
                        <Text style={SettingsStackStyles.subtitle}>
                            {isUserIssue 
                                ? "Enter a description of what has happened between you and this user."
                                : "Enter a description of the issue you've faced while using PROXY Friends"}
                        </Text>
                        <BioInputField
                            placeholder={isUserIssue ? "Description" : "Description of the issue"}
                            multiline={true}
                        />
                        <ShapedButton
                            label="Submit"
                            onPress={() => navigation.goBack()}
                            style = {{marginTop: 10, alignSelf: 'center'}}
                        />
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>

    );
}

export default ReportAProblemScreen;

