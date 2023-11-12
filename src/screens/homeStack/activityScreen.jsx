import { Text, View } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Details from "./details";
import { useQuery } from "react-query";
import {
  addAttendeeToActivity,
  getAllEventUserIsNotPattendeeOf,
} from "../../storage/activityStore";
import React, { useContext, useState } from "react";
import { formatDateRange } from "../../utils/datetime";
import SwiperDeck from "./swiperDeck";
import UserContext from "../../context/userContext";

const formatAttendees = (attendees) => {
  return `${attendees.length} ${
    attendees.length > 1 ? "attendees" : "attendee"
  }`;
};

const ActivityScreen = ({ navigation }) => {
  const { loggedInUserId } = useContext(UserContext);

  const [activities, setActivities] = useState([]);

  const fetchData = async () => {
    const data = await getAllEventUserIsNotPattendeeOf(loggedInUserId);
    setActivities(data);
  };
  const { isLoading, error } = useQuery("getUnmatchedActivities", fetchData);

  if (isLoading) {
    return <Text>Loading...</Text>;
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

  const cards = activities.map((activity) => createActivityData(activity));

  return (
    <SwiperDeck
      cards={cards}
      renderCard={renderCard}
      onAcceptAction={async (cardIndex) => {
        await addAttendeeToActivity(activities[cardIndex].id, loggedInUserId);
      }}
    />
  );
};

export default ActivityScreen;
