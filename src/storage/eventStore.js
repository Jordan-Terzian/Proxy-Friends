import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

const eventKeyPrefix = "EVENT";

const formEventId = () => {
  return String(`${eventKeyPrefix}-${uuidv4()}`);
};

export const getEvent = async (eventId, updateData) => {
  try {
    console.log("Get event with ID", eventId);
    await AsyncStorage.getItem(eventId, (errs, result) => {
      if (errs) {
        console.log(errs);
      } else {
        console.log(result);
        updateData(JSON.parse(result));
      }
    });
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
    console.log(error);
  }
};

export const addNewEvent = async (activityInfo) => {
  const id = formEventId();
  const activityObj = {
    id,
    attendees: ["Annie"], // TODO: get caller information and add a host field.
    host: "Annie",
    ...activityInfo,
  };
  try {
    await AsyncStorage.setItem(id, JSON.stringify(activityObj));
    return id;
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
    console.log(error);
  }
};
