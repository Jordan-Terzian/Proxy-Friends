import { StyleSheet } from 'react-native';

import Metrics from '../../constants/metrics';

const ProfileStackStyles = () =>
    StyleSheet.create({
        safeAreaView: {
            flex: 1,
            backgroundColor: 'white'
        },
        container: {
            marginHorizontal: '6%',
            rowGap: Metrics.screenWidth * 0.03
        },
        section: {
            rowGap: Metrics.screenWidth * 0.01
        },
        header1: {
            color: 'black',
            fontSize: 32,
            lineHeight: 31,
            fontWeight: 'bold'
        },
        subtitle: {
            color: '#636363',
            fontSize: 15,
            lineHeight: 17,
        },
        header2: {
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold'
        },
        mainSummary: {
            alignItems: 'flex-start',
            padding: 20,
            flexDirection: 'row',
        },
        summary: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginLeft: 10,
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
        eventsGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },

    });

export default ProfileStackStyles;
