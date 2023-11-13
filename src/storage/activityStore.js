import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultProfile from "../assets/images/defaultProfile.png";
import { v4 as uuidv4 } from "uuid";
import { Image } from "react-native";

const eventKeyPrefix = "EVENT";

/**
interface Activity {
  id: str,
  image: str,
  activity: str // name of activity
  location: str, // TBC
  startDate: Date,
  endDate: Date,
  attendees: str[], // userIds
  description: str,
  host: str // userId
} 
 */

const formEventId = () => {
  return String(`${eventKeyPrefix}-${uuidv4()}`);
};

export const getEvent = async (eventId) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(eventId));
  } catch (error) {
    console.log("ERROR getEvent:", error);
    throw error;
  }
};

export const addNewEvent = async (activityInfo, host) => {
  const id = formEventId();

  const activityObj = {
    id,
    attendees: [host], // TODO: get caller information and add a host field.
    host,
    ...activityInfo,
  };
  if (!activityInfo.image) {
    activityObj.image = Image.resolveAssetSource(defaultProfile).uri;
  }
  try {
    await AsyncStorage.setItem(id, JSON.stringify(activityObj));
    return id;
  } catch (error) {
    console.log("ERROR addNewEvent:", error);
    throw error;
  }
};

export const addAttendeeToActivity = async (activityId, newAttendee) => {
  const activityInfo = await getEvent(activityId);
  activityInfo.attendees.push(newAttendee);
  try {
    await AsyncStorage.setItem(activityId, JSON.stringify(activityInfo));
    return activityId;
  } catch (error) {
    console.log("ERROR addAttendeeToActivity:", error);
    throw error;
  }
};

export const getAllEventUserIsNotPattendeeOf = async (userName) => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const filteredKeys = allKeys.filter((key) =>
      key.startsWith(eventKeyPrefix)
    );
    const values = await AsyncStorage.multiGet(filteredKeys);
    return values
      .map((activityKeyVal) => activityKeyVal[1])
      .map((activity) => JSON.parse(activity))
      .filter((activity) => !activity.attendees.includes(userName));
  } catch (err) {
    console.log("ERROR getAllEventUserIsNotPattendeeOf:", error);
    throw error;
  }
};
