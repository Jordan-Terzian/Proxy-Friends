import { Image } from "react-native";
import mrBeast from "../assets/users/mr-beast.jpeg";
import shinobu from "../assets/users/poison-hashira.jpeg";
import kymu from "../assets/users/water-hashira.jpeg";
import pewdiepie from "../assets/users/pewdiepie.jpeg";
import tennis from "../assets/activities/tennis.jpeg";
import bouldering from "../assets/activities/bouldering.jpeg";
import { addNewUser } from "../storage/profileStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addAttendeeToActivity, addNewEvent } from "../storage/activityStore";

export const setupUserAndActivities = async () => {
  await AsyncStorage.clear();
  const users = [
    {
      name: "Mr beast",
      age: 11,
      gender: "Male",
      notes: "Some very short note",
      interests: ["Youtube"],
      profileImage: Image.resolveAssetSource(mrBeast).uri,
    },
    {
      name: "Shinobu",
      age: 16,
      gender: "Female",
      notes:
        "Some very longlonglong longlonglong longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong note",
      profileImage: Image.resolveAssetSource(shinobu).uri,
    },
    {
      name: "Kymu",
      age: 6,
      gender: "Transgender",
      notes:
        "Some very medium lengh note that is a bout a few lines long hohohohohoho",
      interests: ["Sleeping", "Demon Slaying", "Water", "Rock climbing"],
      profileImage: Image.resolveAssetSource(kymu).uri,
    },
    {
      name: "Pewdiepie",
      age: 36,
      gender: "Male",
      notes:
        "Some very medium lengh note that is a bout a few lines long hohohohohoho",
      interests: [
        "Gaming",
        "Vlog",
        "Gym",
        "Rock climbing",
        "Swimming",
        "Eating",
        "Cooking",
        "Flying",
        "Singing",
        "Tennis",
      ],
      profileImage: Image.resolveAssetSource(pewdiepie).uri,
    },
  ];

  const userIds = [];
  for (let user of users) {
    userIds.push(await addNewUser(user));
  }

  const activities = [
    {
      activity: "Tennis",
      location: "Melbourne Park",
      startTime: new Date(2023, 4, 9, 7, 30),
      endTime: new Date(2023, 11, 6, 16, 3),
      image: Image.resolveAssetSource(tennis).uri,
    },
    {
      activity: "Bouldering",
      location: "The great rock",
      startTime: new Date(2022, 2, 7, 7, 30),
      endTime: new Date(2023, 3, 15, 16, 3),
      image: Image.resolveAssetSource(bouldering).uri,
    },
  ];

  let i = 0;
  const activityIds = [];
  for (let activity of activities) {
    activityIds.push(await addNewEvent(activity, userIds[i]));
    i++;
  }

  for (let idx = i; i < userIds.length; i++) {
    await addAttendeeToActivity(activityIds[0], userIds[idx]);
  }
};
