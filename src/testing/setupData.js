import { Image } from "react-native";
import mrBeast from "../assets/users/mr-beast.jpeg";
import shinobu from "../assets/users/poison-hashira.jpeg";
import kymu from "../assets/users/water-hashira.jpeg";
import pewdiepie from "../assets/users/pewdiepie.jpeg";
import { addNewUser } from "../storage/profileStore";

export const setupUserAndActivities = () => {
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

  users.forEach((user) => addNewUser(user));
};
