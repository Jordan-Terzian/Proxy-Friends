import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/imageCard/imageCard";
import Assets from "../../constants/assets";

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageCard imgSrc={Assets.activities.tennis}>
        <Text>Activity screen here</Text>
      </ImageCard>
      <StatusBar style="auto" />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
