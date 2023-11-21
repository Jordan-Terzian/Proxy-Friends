import { Image } from "react-native";
import mrBeast from "../assets/users/guy1.jpg";
import shinobu from "../assets/users/guy2.jpeg";
import kymu from "../assets/users/taylor.jpeg";
import pewdiepie from "../assets/users/harry.jpeg";
import tennis from "../assets/activities/tennis.jpeg";
import bouldering from "../assets/activities/bouldering.jpeg";
import trekking from "../assets/activities/trekking.jpeg";
import surfing from "../assets/activities/surfing.jpeg";
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
      interests: ["Youtube", "Gaming", "Rock climbing"],
      profileImage: Image.resolveAssetSource(mrBeast).uri,
      dateOfBirth: "2022-10-19T07:01:54.207Z",
      bio: "God tier youtuber",
      lastMessage: "Hey great to match",
      isEvent: false,

    },
    {
      name: "Shinobu",
      age: 16,
      gender: "Female",
      notes:
        "Some very longlonglong longlonglong longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong note",
      profileImage: Image.resolveAssetSource(shinobu).uri,
      interests: ["Sleeping", "Water", "Marvel"],
      dateOfBirth: "2007-10-19T07:01:54.207Z",
      bio: "God tier demon slayer",
      lastMessage: "Hello great to match with you",
      isEvent: false,
    },
    {
      name: "Taylor Swift",
      age: 23,
      gender: "Transgender",
      notes:
        "Some very medium lengh note that is a bout a few lines long hohohohohoho",
      interests: ["Singing", "Flying", "Writing"],
      profileImage: Image.resolveAssetSource(kymu).uri,
      dateOfBirth: "2000-10-19T07:01:54.207Z",
      bio: "I'm making so much money singing",
      lastMessage: "Hiiii :))",
      isEvent: false,
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
      ],
      profileImage: Image.resolveAssetSource(pewdiepie).uri,
      dateOfBirth: "1987-10-19T07:01:54.207Z",
      bio: "I'm making so much money gaming",
      lastMessage: "What up gamers",
      isEvent: false,
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
      isEvent: true,
      lastMessage: "Chris: Excited about the event!",
      timeSent: "Yesterday",
      host: "Bob Chen",
      description: "Come play tennis with us!",
      id: "2"
    },
    {
      activity: "Bouldering",
      location: "The great rock",
      startTime: new Date(2022, 2, 7, 7, 30),
      endTime: new Date(2023, 3, 15, 16, 3),
      image: Image.resolveAssetSource(bouldering).uri,
      isEvent: true,
      lastMessage: "Chris: Excited about the event!",
      timeSent: "Yesterday",
      host: "Harshil Dogra",
      description: "Come climb with us!",
      id: "3"
    },
    {
      activity: "Surfing",
      location: "The great ocean",
      startTime: new Date(2022, 12, 7, 7, 30),
      endTime: new Date(2023, 1, 5, 16, 3),
      image: Image.resolveAssetSource(surfing).uri,
      isEvent: true,
      lastMessage: "Chris: Excited about the event!",
      timeSent: "Yesterday",
      host: "Jordan Terzian",
      description: "Come surf with us!",
      id: "4"
    },
    {
      activity: "Treking",
      location: "The great mountain",
      startTime: new Date(2023, 12, 7, 7, 30),
      endTime: new Date(2023, 12, 15, 16, 3),
      image: Image.resolveAssetSource(trekking).uri,
      isEvent: true,
      lastMessage: "Chris: Excited about the event!",
      timeSent: "Yesterday",
      host: "Ryan Reynolds",
      description: "Come climb the mountain with my group of friends",
      id: "5"
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
