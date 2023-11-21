// EventModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EventModal = ({ isVisible, event, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContent}>
          {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity> */}
          <Text style={styles.eventName}>Past Event </Text>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="ticket" size={24} color="black" />
            <Text style={styles.detailText}>{event?.title}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="pin" size={24} color="black" />
            <Text style={styles.detailText}>{event?.location}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
            <Text style={styles.detailText}>{event?.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="account-group" size={24} color="black" />
            <Text style={styles.detailText}>{event?.attendees}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="shield-account" size={24} color="black" />
            <Text style={styles.detailText}>{event?.organizer}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#DDE2F5',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Set width of the modal
    alignItems: 'flex-start', // Align text to the left
  },
  closeButton: {
    alignSelf: 'flex-end', // Place the close button on the right
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Space below event name
    alignSelf: 'center', // Center the text
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // Space between detail rows
  },
  detailText: {
    marginLeft: 10, // Space between icon and text
  },
  // ... other styles
});

export default EventModal;
