import { StyleSheet, View } from "react-native";
import ShapedButton from "../../components/atoms/shapedButton";
import Assets from "../../constants/assets";
import Metrics from "../../constants/metrics";
import CircularButton from "../../components/atoms/circularBotton";

const ActionsRow = ({
  rejectLabel,
  onRejectPress,
  acceptLabel,
  onAcceptPress,
}) => {
  return (
    <View style={styles.container}>
      <CircularButton
        label={rejectLabel}
        onPress={onRejectPress}
        image={Assets.images.redCross}
        style={styles.botton}
        labelPosition="bottom"
      />
      <CircularButton
        label={acceptLabel}
        onPress={onAcceptPress}
        image={Assets.images.greenTick}
        style={styles.botton}
        labelPosition="bottom"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between", // Pushes the buttons to opposite sides
    paddingHorizontal: 5, // Add some horizontal spacing
    alignItems: "center", // Aligns buttons vertically in the center
    zIndex: 1,
  },
});

export default ActionsRow;
