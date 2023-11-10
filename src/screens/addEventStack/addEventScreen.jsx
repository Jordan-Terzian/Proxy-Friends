import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import HeaderNavigation from "../../components/molecules/headerNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title, backLabel, nextLabel }) => {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handlePost = () => {
    // Add functionality for the post button
    console.log("Post button pressed");
  };

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={handleCancel} style={styles.button}>
        <Text style={styles.cancelButtonText}>{backLabel}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handlePost} style={styles.button}>
        <Text style={styles.postButtonText}>{nextLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddEventScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        title="Make Event"
        backLabel="Cancel"
        nextLabel="Post"
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default AddEventScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
