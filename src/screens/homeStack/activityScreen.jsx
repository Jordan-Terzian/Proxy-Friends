import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SelectButton from "../../components/selectButton/selectButton";
import { options } from "./homeScreenOptions";

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SelectButton
        options={options}
        selected="Activities"
        navigation={navigation}
      />
      <Text>This is the Activity Screen</Text>
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
    justifyContent: "center",
  },
});
