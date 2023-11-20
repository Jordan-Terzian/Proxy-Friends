// MessageOverlay.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const MessageOverlay = ({ isVisible, onClose, name, onBlock, onReport, onViewAttendees, onLeaveEvent, isEvent }) => {
  if (!isVisible) return null;

  // Overlay actions
  const handleBlock = () => {
    onBlock();
    onClose(); // Use onClose prop
  };

  const handleReport = () => {
    onReport();
    onClose(); // Use onClose prop
  };

  const handleViewAttendees = () => {
    onViewAttendees();
    onClose(); // Close overlay after action
  };

  const handleLeaveEvent = () => {
    onLeaveEvent();
    onClose(); // Close overlay after action
  };

  return (
    <>
      <TouchableOpacity 
        style={[styles.transparentCover, { width: width, height: height }]} 
        onPress={onClose}
      />
      <View style={styles.container}>
        {isEvent ? (
          <>
            <TouchableOpacity style={styles.optionButton} onPress={handleViewAttendees}>
              <Text style={styles.optionText}>View Attendees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleLeaveEvent}>
              <Text style={styles.optionText}>Leave Event</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.optionButton} onPress={handleBlock}>
              <Text style={styles.optionText}>Block {name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleReport}>
              <Text style={styles.optionText}>Report</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 5,
    top: 120, // Adjust this value to position the overlay right below the three dots icon
    backgroundColor: '#DDE2F5',
    borderRadius: 5,
    padding: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  transparentCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
});

export default MessageOverlay;
