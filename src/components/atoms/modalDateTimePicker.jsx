import React from 'react';

import { StyleSheet } from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

const TimeDateModal = ({ ...props }) => {
  const insets = useSafeAreaInsets();
  const styles = createStyles(insets);

  return <DateTimePickerModal {...props} modalStyleIOS={styles.modal} />;
};

const createStyles = (insets) =>
  StyleSheet.create({
    modal: {
      paddingBottom: insets.bottom,
      marginBottom: insets.bottom === 0 ? undefined : 0
    }
  });

export default TimeDateModal;
