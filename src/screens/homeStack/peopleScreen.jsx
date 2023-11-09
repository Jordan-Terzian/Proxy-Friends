import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Assets from "../../constants/assets";
import Details from "./details";
import ShapedButton from "../../components/atoms/shapedButton";
import ActionsRow from "./actionsRow";

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
    <>
      <View style={styles.container}>
        <ImageCard imgSrc={Assets.users.mrBeast}>
          <Details data={personDetails} />
        </ImageCard>
      </View>
      <View style={styles.actionsRowContainer}>
        <ActionsRow
          rejectLabel="Discard"
          onRejectPress={() => console.log("test1")}
          acceptLabel="Seek Match"
          onAcceptPress={() => console.log("test2")}
        />
      </View>
    </>
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
  actionsRowContainer: {
    justifyContent: "flex-start",
  },
});
