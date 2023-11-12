import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Metrics from "../../constants/metrics";

const ImageCard = ({ imgSrc, children }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imgSrc }} style={styles.imageContainer} />
      <View style={styles.infoContainer}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#DDE2F5",
    height:
      Metrics.screenHeight > 900
        ? Metrics.screenHeight * 0.74
        : Metrics.screenHeight > 800
        ? Metrics.screenHeight * 0.72
        : Metrics.screenHeight > 600
        ? Metrics.screenHeight * 0.72
        : Metrics.screenHeight * 0.69,
    width: Metrics.screenWidth * 0.9,
    borderRadius: 10,
  },
  imageContainer: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.35,
    alignItems: "center",
    justifyContent: "flex-start",
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "100%",
  },
});

export default ImageCard;
