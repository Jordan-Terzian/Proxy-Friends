import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PastEvent = ({ event, onPress }) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}> 
      <Image source={event.imageUri} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DDE2F5', 
    borderRadius: 8,
    padding: 10,
    width: '30%', // Each card takes up 30% of the container width
    margin: '1.66%', // Margin set for spacing, total of 5% for 3 cards per row
    alignItems: 'center', // Center the content horizontally
  },
  image: {
    width: 60, // Fixed width
    height: 60, // Fixed height
    borderRadius: 10, // Circular images
    marginBottom: 8, // Margin bottom for spacing between the image and title
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center', // Center the text horizontally
  },
  date: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center', // Center the text horizontally
  },
});

export default PastEvent;
