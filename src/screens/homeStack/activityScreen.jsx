import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Swiper from "react-native-deck-swiper";
import Details from "./details";
import ActionsRow from "./actionsRow";
import { getAllEventUserIsNotPattendeeOf } from "../../storage/activityStore";
import React, { useEffect, useState } from "react";
import { formatDateRange } from "../../utils/datetime";
import Metrics from "../../constants/metrics";

const formatAttendees = (attendees) => {
  return `${attendees.length} ${
    attendees.length > 1 ? "attendees" : "attendee"
  }`;
};

const ActivityScreen = ({ navigation }) => {
  // TODO: Get current logged in user
  const user = "Levi";

  const [activities, setActivities] = useState([]);
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setActivities(await getAllEventUserIsNotPattendeeOf(user));
    };
    fetchData();
  }, []);

  if (!activities || activities.length === 0) {
    // TODO: Decide what this case looks like
    return (
      <View style={styles.container}>
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
    <>
      <View style={[styles.container]}>
        <Swiper
          containerStyle={{
            backgroundColor: "transparent",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: 0,
            top: -60,
          }}
          useViewOverflow={false}
          cards={cards}
          renderCard={renderCard}
          cardIndex={0}
          backgroundColor="#fff"
          disableTopSwipe={true}
          onSwiped={(cardIndex) => {
            cardIndex++;
          }}
        />
      </View>
      <View style={styles.actionsRowContainer}>
        <ActionsRow
          rejectLabel="Discard"
          onRejectPress={() => console.log("test1")}
          acceptLabel="Join"
          onAcceptPress={() => console.log("test2")}
        />
      </View>
    </>
  );
};

export default ActivityScreen;

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
