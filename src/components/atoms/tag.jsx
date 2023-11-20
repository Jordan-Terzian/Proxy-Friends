import { StyleSheet, Text, View } from "react-native";
import Theme from "../../constants/theme";
import Tooltip from "rn-tooltip";
import Metrics from "../../constants/metrics";

const Tag = ({ value }) => {
  return (
    <View style={styles.container}>
      <Tooltip popover={<Text>{value}</Text>}>
        <Text numberOfLines={1} style={styles.text}>
          {value}
        </Text>
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 31,
    minWidth: 97,
    minHeight: 30,
    width: Metrics.screenWidth * 0.2,
    maxWidth: 120,
    zIndex: 1,
  },
  text: {
    zIndex: 2,
    fontSize: Theme.fontSize.small,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});

export default Tag;
