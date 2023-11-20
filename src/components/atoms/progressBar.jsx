import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    width: '100%',
    backgroundColor: '#535353',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#5495FF', // Change the color to your preferred progress bar color
    borderRadius: 5,
  },
});

export default ProgressBar;
