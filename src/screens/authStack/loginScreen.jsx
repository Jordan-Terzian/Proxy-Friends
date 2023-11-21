import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import TextInputIcon from "../../components/molecules/textInput";
import { SafeAreaView } from "react-native-safe-area-context";

import authStyles from "../styles/authStackStyles";

import Metrics from "../../constants/metrics";
import ShapedButton from "../../components/atoms/shapedButton";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [userId, setUserId] = useState("");

  const onLoginSuccess = async () => {
    navigation.navigate("AppStack");
  };

  return (
    <SafeAreaView style={authStyles.safeAreaView} edges={[]}>
      <View style={[authStyles.container, styles.container]}>
        <Text style={styles.headerTextStyle}>PROXY Friends</Text>

        <TextInputIcon
          placeholder="Email"
          style={{ width: "90%" }}
          value={userId}
          onChangeText={setUserId}
        />

        <TextInputIcon
          placeholder="Password"
          secureTextEntry
          style={{ width: "90%" }}
        />

        <ShapedButton label="Login" onPress={onLoginSuccess} />
        <ShapedButton label="Forgot Password" onPress={() => {}} />
        <View style={styles.registerContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AuthenticationDetails")}
          >
            <Text style={styles.registerLink}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: Metrics.screenHeight * 0.015,
    marginTop: Metrics.screenHeight * 0.2,
  },
  headerTextStyle: {
    fontSize: 48,
    fontWeight: "800",
    marginBottom: 20,
  },
  registerLink: {
    color: "#5495FF",
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default LoginScreen;
