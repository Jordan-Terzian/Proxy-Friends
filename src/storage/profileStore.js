import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import { Image } from "react-native";
import defaultProfile from "../assets/images/defaultProfile.png";



// WRITTEN BY ANNIE 

/**
interface UserProfile {
    id: str,
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

// For testing, remove this after
export const setUpLogInUser = async (userId) => {
  const id = String(`${profileKeyPrefix}-${userId}`);
  const matchedUsers = [];
  try {
    await AsyncStorage.setItem(id, JSON.stringify({ id, matchedUsers }));
  } catch (error) {
    console.log("ERROR setUpLogInUser:", error);
    throw error;
  }
  return id;
};

export const addNewUser = async (userInfo) => {
  const id = String(`${profileKeyPrefix}-${uuidv4()}`);
  const userObj = {
    id,
    ...userInfo,
    matchedUsers: [],
  };
  if (!userInfo.interests) {
    userObj.interests = [];
  }
  if (!userInfo.profileImage) {
    userObj.image = Image.resolveAssetSource(defaultProfile).uri;
  }
  try {
    await AsyncStorage.setItem(id, JSON.stringify(userObj));
    return id;
  } catch (error) {
    console.log("ERROR addNewUser:", error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(userId));
  } catch (error) {
    console.log("ERROR getUserProfile:", error);
    throw error;
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
    console.log("ERROR getUnmatchedUsers:", error);
    throw error;
  }
};

export const addMatchUser = async (loggedInUserId, newMatchUserId) => {
  try {
    const loggedInUserProfile = await getUserProfile(loggedInUserId);

    if (!loggedInUserProfile) {
      return null; // Or handle the error as needed
    }

    if (!loggedInUserProfile.matchedUsers) {
      loggedInUserProfile.matchedUsers = []; // Initialize if undefined
    }

    loggedInUserProfile.matchedUsers.push(newMatchUserId);

    await AsyncStorage.setItem(
      loggedInUserId,
      JSON.stringify(loggedInUserProfile)
    );

    return loggedInUserId;
  } catch (error) {
    console.error("ERROR addMatchUser:", error);
    throw error;
  }
};



// export const addMatchUser = async (loggedInUserId, newMatchUserId) => {
//   const loggedInUserProfile = await getUserProfile(loggedInUserId);
//   console.log(loggedInUserId, newMatchUserId);
//   console.log(loggedInUserProfile);
//   loggedInUserProfile.matchedUsers.push(newMatchUserId);
//   try {
//     await AsyncStorage.setItem(
//       loggedInUserId,
//       JSON.stringify(loggedInUserProfile)
//     );
//     return loggedInUserId;
//   } catch (error) {
//     console.log("ERROR addMatchUser:", error);
//     throw error;
//   }
// };
