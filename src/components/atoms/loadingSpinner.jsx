import { ActivityIndicator, View } from "react-native";

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator color="#DDE2F5" />
    </View>
  );
};

export default LoadingSpinner;
