import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InterestLabel = ({ interests, onDelete, showDelete }) => {
  return (
    <View style={styles.container}>
      {interests.map((interest, index) => (
        <View key={index} style={styles.interestLabel}>
          <Text style={styles.interestText}>{interest.name}</Text>
          {showDelete && (
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(interest.name)}>
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
          )}
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
  deleteButton: {
    position: 'absolute',
    top: -5,
    left: -8,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 15,
    height: 15,
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',

  },
});

export default InterestLabel;
