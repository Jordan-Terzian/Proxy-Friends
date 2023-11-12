import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SelectButton from "../../components/atoms/selectButton";
import ActivityScreen from "./activityScreen";
import PeopleScreen from "./peopleScreen";

const HomeScreen = ({ route, navigation }) => {
  const options = ["People", "Activities"];
  const { tab, activityId } = route?.params || {};
  const receivedDataTab = tab || options[0];

  const [selectedTab, setSelectedTab] = useState(receivedDataTab);

  console.log(receivedDataTab, selectedTab);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topTab}>
        <SelectButton
          options={options}
          selected={selectedTab}
          handlePress={setSelectedTab}
        />
      </View>

      {selectedTab == "People" && (
        <PeopleScreen navigation={navigation}></PeopleScreen>
      )}
      {selectedTab == "Activities" && (
        <ActivityScreen
          navigation={navigation}
          activityId={activityId}
        ></ActivityScreen>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topTab: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 5,
    paddingBottom: 20,
    zIndex: 2,
  },
});
