import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/imageCard/imageCard";
import Assets from "../../constants/assets";

const PeopleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageCard imgSrc={Assets.users.mrBeast}>
        <Text>People screen here</Text>
      </ImageCard>
      <StatusBar style="auto" />
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
