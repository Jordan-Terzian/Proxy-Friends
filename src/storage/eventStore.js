import { AsyncStorage } from "react-native";
import { v4 as uuidv4 } from "uuid";

const eventKeyPrefix = "EVENT";

const formEventId = (eventId) => {
  return `${eventKeyPrefix}-${eventId}`;
};

export const getEvent = async ({ eventId }) => {
  try {
    return await AsyncStorage.getItem(eventId);
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
  }
};

export const addNewEvent = async (activityInfo) => {
  const id = formEventId(uuidv4());
  const activityObj = {
    id,
    attendees: [], // TODO: get caller information and add a host field.
    ...activityInfo,
  };
  try {
    console.log(activityObj);
    await AsyncStorage.setItem(id, activityObj);
    return id;
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
  }
};
