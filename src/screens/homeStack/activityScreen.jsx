import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/organisms/imageCard";
import Assets from "../../constants/assets";
import Details from "./details";
import ActionsRow from "./actionsRow";
import { getEvent } from "../../storage/eventStore";
import { useEffect, useState } from "react";

const formatDateTime = (startDate, endDate) => {
  const formatDate = (date) => {
    if (!date) return placeholder;
    const day = date.getDate();
    const month = date.getMonth() + 1; // January is 0!
    const year = date.getFullYear();
    return `${day < 10 ? `0${day}` : day}/${
      month < 10 ? `0${month}` : month
    }/${year}`;
  };

  const formatTwoDigit = (hour) => {
    return hour >= 10 ? hour : `0${hour}`;
  };
  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth() + 1; // January is 0!
  const startYear = startDate.getFullYear();
  const startHour = startDate.getHours();
  const startMin = startDate.getMinutes();

  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth() + 1; // January is 0!
  const endYear = endDate.getFullYear();
  const endHour = endDate.getHours();
  const endMin = endDate.getMinutes();

  if (startDay === endDay && startMonth === endMonth && startYear === endYear) {
    return `${formatDate(startDate)} ${formatTwoDigit(
      startHour
    )}:${formatTwoDigit(startMin)} - ${formatTwoDigit(
      endHour
    )}:${formatTwoDigit(endMin)}`;
  } else {
    return `${formatDate(startDate)} ${formatTwoDigit(
      startHour
    )}:${formatTwoDigit(startMin)}  - ${formatDate(endDate)} ${formatTwoDigit(
      endHour
    )}:${formatTwoDigit(endMin)}`;
  }
};

const formatAttendees = (attendees) => {
  return `${attendees.length} ${
    attendees.length > 1 ? "attendees" : "attendee"
  }`;
};

const ActivityScreen = ({ navigation, activityId }) => {
  if (!activityId) {
    // TODO: Decide what this case looks like
    return (
      <View style={styles.container}>
        <Text>There is no activity</Text>
      </View>
    );
  }

  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      getEvent(activityId, setActivityData);
    };
    fetchData();
  }, []);

  const activityDetailData =
    activityData === null
      ? []
      : [
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
            detail: formatDateTime(
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
  return (
    <>
      <View style={styles.container}>
        <ImageCard imgSrc={Assets.activities.tennis}>
          <Details data={activityDetailData} />
        </ImageCard>
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
