import { Text, View, Image, ActivityIndicator } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Details from "./details";
import defaultProfile from "../../assets/images/defaultProfile.png";
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import UserContext from "../../context/userContext";
import { addMatchUser, getUnmatchedUsers } from "../../storage/profileStore";
import SwiperDeck from "./swiperDeck";
import LoadingSpinner from "../../components/atoms/loadingSpinner";

const PeopleScreen = ({ navigation }) => {
  const { loggedInUserId } = useContext(UserContext);

  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    setProfiles(await getUnmatchedUsers(loggedInUserId));
  };

  const { isLoading, error } = useQuery("getUnmatchedProfiles", fetchData);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(isLoading, error);
  if (error) {
    throw error;
  }

  if (profiles.length === 0) {
    // TODO: Decide what this case looks like
    return (
      <View>
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
    <SwiperDeck
      cards={cards}
      renderCard={renderCard}
      onAcceptAction={async (cardIndex) => {
        await addMatchUser(loggedInUserId, profiles[cardIndex].id);
      }}
    />
  );
};

export default PeopleScreen;
