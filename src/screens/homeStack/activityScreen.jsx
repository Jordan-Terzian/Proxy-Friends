import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageCard from "../../components/imageCard/imageCard";
import Assets from "../../constants/assets";
import ActivityDetails from "./activityDetails";

const ActivityScreen = ({ navigation }) => {
  // TODO: Update this to pass in the details data.
  const activityDetailData = [
    { id: "activityIcon", icon: "local-activity", detail: "Tennis" },
    { id: "activityLocation", icon: "location-pin", detail: "Melbourne Park" },
    {
      id: "activityTime",
      icon: "event",
      detail: "12/12/2023, 12pm - 2pm",
    },
    {
      id: "activityAttendees",
      icon: "groups",
      detail: "10 attendees",
    },
    {
      id: "activityHost",
      icon: "assignment-ind",
      detail: "Annie Huynh",
    },
    {
      id: "activityNotes",
      icon: "notes",
      detail:
        "Come join me and my friend for a fun game of tennis hahahahahahahha. I want to make this very long for testing purpose. omggfdklfjdalfjadlksfjlkdasjflkdasjfkladsjfkldasjfkladsjfkldasjfkladsjfkl  fdfadsfda dfdasfasdfsdfdsafkasdjflkadsjflkdas;flkdasjflkadsjflkdasjflkasjdflkadsjflkasjdfkljsdlkfjsd;alkfjlkasjflksadjskfjslk",
    },
  ];
  return (
    <View style={styles.container}>
      <ImageCard imgSrc={Assets.activities.tennis}>
        <ActivityDetails data={activityDetailData} />
      </ImageCard>
      <StatusBar style="auto" />
    </View>
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
});
