import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Metrics from "../../constants/metrics";
import Theme from "../../constants/theme";

const CircularButton = ({ image, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.12,
    height: Metrics.screenWidth * 0.09,
    borderRadius: (Metrics.screenWidth * 0.09) / 2, // Make it circular by setting half of the width/height
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: Metrics.screenWidth * 0.09, // Set the image width
    height: Metrics.screenWidth * 0.09, // Set the image height
    borderRadius: (Metrics.screenWidth * 0.09) / 2, // Make the image circular
  },
  label: {
    marginTop: 3, // Add some space between the image and label
    textAlign: "center",
    fontSize: Theme.fontSize.extraSmall,
  },
});

export default CircularButton;
