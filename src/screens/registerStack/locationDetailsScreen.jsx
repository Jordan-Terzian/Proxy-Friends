import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import HeaderNavigation from "../../components/molecules/headerNavigation";
import Metrics from "../../constants/metrics";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import createRegisterStyles from "../styles/registerStackStyles";

const LocationDetailsScreen = ({route}) => {
  const navigation = useNavigation();

  const {email, username, password, gender, dateOfBirth, name, bio, image} = route.params;

  const goToNextScreen = () => {
    navigation.navigate("Interests", {
      email,
      username,
      password,
      gender,
      dateOfBirth,
      name, 
      bio,
      image,
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Handle the case where permission is not granted
        console.log("Permission to access location was denied");
        return;
      }

      // You can now use functions like Location.getCurrentPositionAsync() to get the current location
      // Note that simply calling this function will also trigger the permission popup if needed
      let location = await Location.getCurrentPositionAsync({});

      console.log(location);
      goToNextScreen();
    })();
  }, []);

  const RegisterStyles = createRegisterStyles();
  return (
    <SafeAreaView style={RegisterStyles.safeAreaView} edges={["bottom"]}>
      <HeaderNavigation
        title=""
        onNext={goToNextScreen}
        currentStep={5}
        totalSteps={6}
        isNextEnabled={true}
      />
      <View style={RegisterStyles.underHeaderContainer}>
        <Text style={RegisterStyles.header1}>LOCATION DETAILS</Text>
      </View>
      <View style={RegisterStyles.container}>
        <Text style={RegisterStyles.subtitle}>
          Please enable Location Services, we use this information to match you
          to nearby users and events.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationDetailsScreen;
