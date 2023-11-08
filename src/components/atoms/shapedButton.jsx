import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Metrics from '../../constants/metrics';

const ShapedButton = ({ label, onPress, style, image, rectangular }) => {
  const styles = createStyles(rectangular, label);
  return (
    <TouchableOpacity
      style={[styles.buttonContent, style]}
      onPress={onPress}
    >
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (rectangular, label) =>
  StyleSheet.create({
    buttonContent: {
      justifyContent: 'center', // Center text
      alignItems: 'center', // Center text vertically
      backgroundColor: label === "Forgot Password" ? "#D9D9D9" : "#CDDCF2",
      height: Metrics.screenWidth * 0.118,
      width: rectangular ? '90%' : '70%',
      borderRadius: rectangular ? 12 : 50,
      position: 'relative', // Needed for absolute positioning of the image
    },
    image: {
      position: 'absolute', // Absolute positioning to place it on the far left
      left: Metrics.screenWidth * 0.02, // Adjust as needed for the space from the left edge
      marginVertical: Metrics.screenWidth * 0.004, // Adjust as needed for the space from the top and bottom
    },
    text: {
      textAlign: 'center', // Ensure text is centered
    },
  });

export default ShapedButton;
