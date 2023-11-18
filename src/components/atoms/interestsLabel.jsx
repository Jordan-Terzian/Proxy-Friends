import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InterestLabel = ({ interests }) => {
  return (
    <View style={styles.container}>
      {interests.map((interest, index) => (
        <View key={index} style={styles.interestLabel}>
          <Text style={styles.interestText}>{interest.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly', 
    alignItems: 'flex-start',
    marginTop: 10,
  },
  interestLabel: {
    backgroundColor: '#DDE2F5', 
    borderRadius: 20,
    paddingVertical: 5,

    width: '30%',
    alignItems: 'center', 
    marginVertical: 5, 
  },
  interestText: {
    fontSize: 16,
    color: '#000', 
  },
});

export default InterestLabel;
