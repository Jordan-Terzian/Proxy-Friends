import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const InterestButton = ({ label, onPress, isSelected }) => {
  // Local state to manage selection
  const [selected, setSelected] = useState(isSelected);

  const handlePress = () => {
    setSelected(!selected); // Toggle selection state
    onPress(label); // Call the onPress function passed from the parent, if any
  };

  return (
    <TouchableOpacity
      style={[styles.button, selected ? styles.selected : null]} // Apply the selected style if the button is selected
      onPress={handlePress}
    >
      <Text style={[styles.text, selected ? styles.selectedText : null]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    padding: 10,
    margin: 5
  },
  selected: {
    backgroundColor: '#DDE2F5', // The color when the button is selected
  },
  text: {
    color: 'black',
    textAlign: 'center'
  },
  selectedText: {
    color: 'black', // The text color when the button is selected
  },
});

export default InterestButton;
