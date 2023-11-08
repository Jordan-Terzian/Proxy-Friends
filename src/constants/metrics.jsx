import { Dimensions, Platform } from "react-native";

const Metrics = {
  isIos: Platform.OS === "ios",
  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
};

export default Metrics;
