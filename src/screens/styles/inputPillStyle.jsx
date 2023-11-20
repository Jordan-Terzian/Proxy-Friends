import { StyleSheet } from 'react-native';

import Metrics from '../../constants/metrics';

const InputPillStyle = () =>
  StyleSheet.create({
    InputPill: {
      flexDirection: 'row',
      borderRadius: 50,
      height: Metrics.screenWidth * 0.09,
      minHeight: 34,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DDE2F5',
      paddingHorizontal: Metrics.screenWidth * 0.035,
      columnGap: 5
    }
  });

export default InputPillStyle;
