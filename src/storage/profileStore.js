import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import { Image } from "react-native";

/**
interface UserProfile {
    userId: str,
    matchedUsers: str[],
    name: str,
    age: number,
    gender: male | female | transgender,
    notes: str,
    interests: str[],
    profileImage: str,
}
**/

export const profileKeyPrefix = "PROFILE";

export const getUserProfile = async (userId) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(userId));
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
    console.log(error);
  }
};

export const getUnmatchedUsers = async (loggedInUserId) => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const filteredKeys = allKeys.filter(
      (key) => key.startsWith(profileKeyPrefix) && key !== loggedInUserId
    );
    const values = await AsyncStorage.multiGet(filteredKeys);
    return values
      .map((profileKeyVal) => profileKeyVal[1])
      .map((profile) => JSON.parse(profile))
      .filter((profile) => !profile.matchedUsers.includes(loggedInUserId));
  } catch (error) {
    // Error saving data
    // TODO: show error snack bar
    console.log(error);
  }
};
