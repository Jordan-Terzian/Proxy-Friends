import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Svg, { Rect, SvgXml } from "react-native-svg";
import HeaderNavigation from "../../components/molecules/headerNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Assets from "../../constants/assets";
import Metrics from "../../constants/metrics";
import TextInputIcon from "../../components/molecules/textInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BioInputField from "../../components/molecules/textInputMultiLine";
import DatePickerField from "../../components/molecules/datePickerField";
import { addNewEvent } from "../../storage/activityStore";
import ModalImagePicker from "../../components/molecules/modalImagePicker";
import UseToggle from "../../utils/useToggle";
import ImageButton from "../../components/atoms/imageButton";
import UserContext from "../../context/userContext";

const RoundedRectWithSvg = () => {
  const calendarSvg = `<svg width="77" height="80" viewBox="0 0 77 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M67.9583 8.74996H63.75V0.916626H55.3333V8.74996H21.6667V0.916626H13.25V8.74996H9.04167C4.4125 8.74996 0.625 12.275 0.625 16.5833V71.4166C0.625 75.7641 4.4125 79.25 9.04167 79.25H67.9583C72.6296 79.25 76.375 75.7641 76.375 71.4166V16.5833C76.375 12.275 72.6296 8.74996 67.9583 8.74996ZM67.9583 71.4166H9.04167V32.25H67.9583V71.4166ZM9.04167 24.4166V16.5833H67.9583V24.4166H9.04167ZM17.4583 40.0833H59.5417V47.9166H17.4583V40.0833ZM17.4583 55.75H46.9167V63.5833H17.4583V55.75Z" fill="#535353"/>
  </svg>`;

  return (
    <View style={styles.eventPicture}>
      <View style={styles.roundedRect}>
        <SvgXml xml={calendarSvg} />
      </View>
    </View>
  );
};

const TopBar = ({ title, backLabel, nextLabel, handlePost }) => {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={handleCancel} style={styles.button}>
        <Text style={styles.cancelButtonText}>{backLabel}</Text>
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>{title}</Text>
      <TouchableOpacity onPress={handlePost} style={styles.button}>
        <Text style={styles.postButtonText}>{nextLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddEventScreen = ({ navigation }) => {
  const [activity, setActivity] = useState(null);
  const [location, setLocation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const { value: showImageUploader, toggleValue: setShowImageUploader } =
    UseToggle();

  const { loggedInUserId } = useContext(UserContext);

  const handlePost = async () => {
    const activityId = await addNewEvent(
      {
        activity,
        location,
        startTime,
        endTime,
        description,
        image,
      },
      loggedInUserId
    );

    navigation.navigate("HomeScreen", {
      tab: "Activities",
      activityId,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        title="Make Event"
        backLabel="Cancel"
        nextLabel="Post"
        handlePost={handlePost}
      />
      <View style={styles.eventFormContainer}>
        <Text style={styles.eventTitle}>Event Picture</Text>
        <TouchableOpacity onPress={setShowImageUploader}>
          <View style={styles.imageContainer}>
            {image === null && <RoundedRectWithSvg />}
            {image !== null && (
              <ImageButton
                imageUri={image}
                size={Math.min(
                  styles.roundedRect.height * 0.8,
                  styles.roundedRect.width * 0.8
                )}
                style={[styles.roundedRect]}
                onPress={setShowImageUploader}
              />
            )}
            <TouchableOpacity onPress={setShowImageUploader}>
              <Image
                resizeMode="contain"
                style={styles.editImage}
                source={Assets.images.pencil}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <ModalImagePicker
          isVisible={showImageUploader}
          toggleVisibility={setShowImageUploader}
          onImagePicked={(uri) => setImage(uri)}
        />

        <View style={{ paddingTop: Metrics.screenWidth * 0.08 }}></View>
        <View style={styles.activityFormInput}>
          <Text style={styles.activityFormText}>Activity:</Text>
          <TextInputIcon
            placeholder="Enter Activity"
            style={{ width: "70%" }}
            containerStyle={{ justifyContent: "flex-start" }}
            value={activity}
            onChangeText={setActivity}
          />
        </View>
        <View style={styles.activityFormInput}>
          <Text style={styles.activityFormText}>Location:</Text>
          <TextInputIcon
            placeholder="Enter Location"
            style={{ width: "70%" }}
            containerStyle={{ justifyContent: "flex-start" }}
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <View style={[styles.activityFormInput]}>
          <Text style={[styles.activityFormText]}>Start time:</Text>
          <DatePickerField
            placeholder="DD/MM/YYYY HH:MM"
            style={{ width: "72%", justifyContent: "flex-start" }}
            showIcon={true}
            mode="datetime"
            onConfirm={setStartTime}
          />
        </View>
        <View style={[styles.activityFormInput]}>
          <Text style={[styles.activityFormText]}>End time:</Text>
          <DatePickerField
            placeholder="DD/MM/YYYY HH:MM"
            style={{ width: "72%", justifyContent: "flex-start" }}
            showIcon={true}
            mode="datetime"
            onConfirm={setEndTime}
          />
        </View>
        <Text style={[styles.activityFormText, { paddingBottom: 10 }]}>
          Description:
        </Text>
        <BioInputField
          placeholder="Enter Event Description"
          style={{ width: "100%" }}
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 10,
  },
  button: {
    paddingHorizontal: 10,
  },
  postButtonText: {
    color: "#2F88FF",
    fontSize: 15,
  },
  cancelButtonText: {
    color: "black",
    fontSize: 15,
  },
  topBarTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventFormContainer: {
    paddingHorizontal: 15,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    paddingLeft: Metrics.screenWidth * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  eventPicture: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Metrics.screenHeight * 0.02,
  },
  roundedRect: {
    width: Metrics.screenWidth * 0.45,
    height: Metrics.screenWidth * 0.42,
    backgroundColor: "#DDE2F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  editImage: {
    width: Metrics.screenWidth * 0.05,
    top: (Metrics.screenWidth * 0.45) / 2 + Metrics.screenWidth * 0.05,
  },
  svg: {
    position: "absolute",
  },
  activityFormText: {
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },
  activityFormInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    paddingBottom: 10,
  },
});
