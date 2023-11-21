import { Text, View, ActivityIndicator } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Details from "./details";
import { useQuery } from "react-query";
import {
  addAttendeeToActivity,
  getAllEventUserIsNotPattendeeOf,
} from "../../storage/activityStore";
import React, { useContext, useState, useEffect } from "react";
import { formatDateRange } from "../../utils/datetime";
import SwiperDeck from "./swiperDeck";
import UserContext from "../../context/userContext";
import LoadingSpinner from "../../components/atoms/loadingSpinner";
import AsyncStorage from "@react-native-async-storage/async-storage";

const formatAttendees = (attendees) => {
  return `${attendees.length} ${attendees.length > 1 ? "attendees" : "attendee"
    }`;
};

const ActivityScreen = ({ navigation }) => {
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

  const [activities, setActivities] = useState([]);

  const fetchData = async () => {
    const data = await getAllEventUserIsNotPattendeeOf(loggedInUserId);
    setActivities(data);
  };
  const { isLoading, error } = useQuery("getUnmatchedActivities", fetchData);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    throw error;
  }

  if (!activities || activities.length === 0) {
    // TODO: Decide what this case looks like
    return (
      <View>
        <Text>There is no activity</Text>
      </View>
    );
  }

  const renderCard = (activityDetailData) => {
    return (
      <ImageCard imgSrc={activityDetailData[0].detail}>
        <Details data={activityDetailData} />
      </ImageCard>
    );
  };

  const createActivityData = (activityData) => {
    return [
      {
        id: "activityImage",
        type: "imageItem",
        detail: activityData.image,
      },
      {
        id: "activityIcon",
        icon: "local-activity",
        detail: activityData.activity,
        type: "iconItem",
      },
      {
        id: "activityLocation",
        icon: "location-pin",
        detail: activityData.location,
        type: "iconItem",
      },
      {
        id: "activityTime",
        icon: "event",
        detail: formatDateRange(
          new Date(activityData.startTime),
          new Date(activityData.endTime)
        ),
        type: "iconItem",
      },
      {
        id: "activityAttendees",
        icon: "groups",
        detail: formatAttendees(activityData.attendees),
        type: "iconItem",
      },
      {
        id: "activityHost",
        icon: "assignment-ind",
        detail: activityData.host,
        type: "iconItem",
      },
      {
        id: "activityNotes",
        icon: "notes",
        detail: activityData.description,
        type: "iconItem",
      },
    ];
  };

  const createMessageFromActivity= (activity) => {
    return {
      name: activity.activity,
      image: activity.image,
      isEvent: true,
      timeSent: activity.timeSent,
      lastMessage: activity.lastMessage
    };
  };

  const cards = activities.map((activity) => createActivityData(activity));

  return (
    <SwiperDeck
      cards={cards}
      renderCard={renderCard}
      onAcceptAction={async (cardIndex) => {
        const newMessage = createMessageFromActivity(activities[cardIndex]);
      
        try {
            let messagesData = await AsyncStorage.getItem('@Messages');
            const messages = messagesData ? JSON.parse(messagesData) : [];
      
            messages.push(newMessage);
      
            await AsyncStorage.setItem('@Messages', JSON.stringify(messages));
        } catch (e) {
            console.log("Error updating messages:", e);
        }
      
        await addAttendeeToActivity(activities[cardIndex].id, loggedInUserId);
      }}
    />
  );
};

export default ActivityScreen;
