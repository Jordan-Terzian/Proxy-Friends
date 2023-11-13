import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ErrorFallbacComponent = ({ error, resetError }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Something happened!</Text>
      <Text style={{ textAlign: "center" }}>{error.toString()}</Text>
      <Button onPress={resetError} title={"Go back"} />
    </View>
  );
};

export default ErrorFallbacComponent;
