import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Swiper from "react-native-deck-swiper";
import Details from "./details";
import defaultProfile from "../../assets/images/defaultProfile.png";
import ActionsRow from "./actionsRow";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import { getUnmatchedUsers } from "../../storage/profileStore";

const PeopleScreen = ({ navigation }) => {
  const { loggedInUserId } = useContext(UserContext);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProfiles(await getUnmatchedUsers(loggedInUserId));
    };
    fetchData();
  }, []);

  if (profiles.length === 0) {
    // TODO: Decide what this case looks like
    return (
      <View style={styles.container}>
        <Text>There is no people</Text>
      </View>
    );
  }

  const renderCard = (personDetails) => {
    return (
      <ImageCard
        imgSrc={
          personDetails[0].detail ??
          Image.resolveAssetSource(defaultProfile).uri
        }
      >
        <Details data={personDetails} />
      </ImageCard>
    );
  };

  const createPersonDetails = (profileInfo) => {
    return [
      {
        id: "profileImage",
        detail: profileInfo.profileImage,
        type: "imageItem",
      },
      {
        id: "profileIcon",
        icon: "person",
        detail: profileInfo.name,
        type: "iconItem",
      },
      {
        id: "profileAge",
        icon: "cake",
        detail: profileInfo.age,
        type: "iconItem",
      },
      {
        id: "profileGender",
        icon: "gender-transgender",
        detail: profileInfo.gender,
        iconType: "MaterialCommunicyIcons", // Special case since for some reason MaterialIcon ones does not load..
        type: "iconItem",
      },
      {
        id: "activityNotes",
        icon: "note",
        detail: profileInfo.notes,
        type: "iconItem",
      },
      {
        id: "interests",
        type: "interestsGrid",
        interests: profileInfo.interests,
      },
    ];
  };

  const cards = profiles.map((profile) => createPersonDetails(profile));

  return (
    <>
      <View style={styles.container}>
        <Swiper
          containerStyle={{
            backgroundColor: "transparent",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: 0,
            top: -60,
          }}
          // useViewOverflow={false}
          cards={cards}
          renderCard={renderCard}
          cardIndex={0}
          backgroundColor="#fff"
          verticalSwipe={false}
          onSwiped={(cardIndex) => {
            cardIndex++;
          }}
        />
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
