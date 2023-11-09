import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Assets from "../../constants/assets";
import Details from "./details";

const PeopleScreen = ({ navigation }) => {
  const personDetails = [
    { id: "profileIcon", icon: "person", detail: "Mr Beast", type: "iconItem" },
    { id: "profileAge", icon: "cake", detail: "22", type: "iconItem" },
    {
      id: "profileGender",
      icon: "gender-transgender",
      detail: "Male",
      iconType: "MaterialCommunicyIcons", // Special case since for some reason MaterialIcon ones does not load..
      type: "iconItem",
    },
    {
      id: "activityNotes",
      icon: "note",
      detail:
        "Make this very long for testing purpose. omggfdklfjdalfjadlksfjlkdasjflkdasjfkladsjfkldasjfkladsjfkldasjfkladsjfkl  fdfadsfda dfdasfasdfsdfdsafkasdjflkadsjflkdas;flkdasjflkadsjflkdasjflkasjdflkadsjflkasjdfkljsdlkfjsd;alkfjlkasjflksadjskfjslk",
      type: "iconItem",
    },
    {
      id: "interests",
      type: "interestsGrid",
      interests: [
        "Video games",
        "Movies",
        "Anime",
        "Tennis",
        "Sleeping",
        "Gym",
        "Some thing very long",
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <ImageCard imgSrc={Assets.users.mrBeast}>
        <Details data={personDetails}></Details>
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
