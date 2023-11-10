import { StyleSheet } from 'react-native';

import Metrics from '../../constants/metrics';

const RegisterStyles = () =>
  StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: palette.background
    },
    container: {
      marginHorizontal: '6%',
      rowGap: Metrics.screenWidth * 0.03
    },
    underHeaderContainer: {
      marginHorizontal: '6%',
      rowGap: Metrics.screenWidth * 0.03,
      paddingTop: 12
    },
    section: {
      rowGap: Metrics.screenWidth * 0.01
    }
  });

export default RegisterStyles;
