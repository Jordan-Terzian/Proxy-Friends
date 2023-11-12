import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import { Image } from "react-native";

const eventKeyPrefix = "EVENT";

const formEventId = () => {
  return String(`${eventKeyPrefix}-${uuidv4()}`);
};

export const getEvent = async (eventId, updateData) => {
  try {
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
  if (activityInfo.image === null) {
    activityObj.image = Image.resolveAssetSource(defaultProfile).uri;
  }
  try {
    await AsyncStorage.setItem(id, JSON.stringify(activityObj));
    return id;
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
    console.log(error);
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
    console.log(err);
  }
};
