import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Details from "./details";
import defaultProfile from "../../assets/images/defaultProfile.png";
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import UserContext from "../../context/userContext";
import { addMatchUser, getUnmatchedUsers } from "../../storage/profileStore";
import SwiperDeck from "./swiperDeck";
import LoadingSpinner from "../../components/atoms/loadingSpinner";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PeopleScreen = ({ navigation }) => {
  const { loggedInUserId } = useContext(UserContext);



  useEffect(() => {
    const initializeMessages = async () => {
      const messagesData = await AsyncStorage.getItem('@Messages');
      if (!messagesData) {
        await AsyncStorage.setItem('@Messages', JSON.stringify([])); // Initialize with an empty array
      }
    };

    initializeMessages();
  }, []);

  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    setProfiles(await getUnmatchedUsers(loggedInUserId));
  };

  const { isLoading, error } = useQuery("getUnmatchedProfiles", fetchData);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    throw error;
  }

  if (profiles.length === 0) {
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

  const createMessageFromPerson = (person) => {
    return {
      bio: person.bio,
      dateOfBirth: person.dateOfBirth,
      gender: person.gender,
      image: person.profileImage,
      name: person.name,
      selectedInterests: person.interests,
      isEvent: false,
      timeSent: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      lastMessage: person.lastMessage
    };
  };

  const cards = profiles.map((profile) => createPersonDetails(profile));

  return (
    <SwiperDeck
      cards={cards}
      renderCard={renderCard}
      onAcceptAction={async (cardIndex) => {
        const newMessage = createMessageFromPerson(profiles[cardIndex]);
      
        try {
            let messagesData = await AsyncStorage.getItem('@Messages');
            const messages = messagesData ? JSON.parse(messagesData) : [];
      
            messages.push(newMessage);
      
            await AsyncStorage.setItem('@Messages', JSON.stringify(messages));
        } catch (e) {
            console.log("Error updating messages:", e);
        }
      
      }}
    />
  );
};

export default PeopleScreen;
