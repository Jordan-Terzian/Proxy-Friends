import { StyleSheet } from 'react-native';

import Metrics from '../../constants/metrics';

const SettingsStackStyles = () =>
    StyleSheet.create({
        safeAreaView: {
            flex: 1,
            backgroundColor: 'white'
        },
        container: {
            paddingHorizontal: 0,
        },
        pageContainer: {
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
    });

export default SettingsStackStyles;
