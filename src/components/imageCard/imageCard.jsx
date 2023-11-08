import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Metrics from "../../constants/metrics";

const ImageCard = ({ imgSrc, children }) => {
  return (
    <View style={styles.container}>
      <Image source={imgSrc} style={styles.imageContainer} />
      <View style={styles.infoContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#DDE2F5",
    height: Metrics.screenHeight * 0.75,
    width: Metrics.screenWidth * 0.9,
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    height: undefined,
    alignItems: "center",
    justifyContent: "flex-start",
    resizeMode: "cover",
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default ImageCard;
