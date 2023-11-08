import { StyleSheet, Text, View, FlatList } from "react-native";
import { default as MaterialCommunityIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import { default as MaterialIcon } from "react-native-vector-icons/MaterialIcons";
import Theme from "../../constants/theme";

const Details = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          {item.type === "MaterialCommunicyIcons" && (
            <MaterialCommunityIcon
              name={item.icon}
              size={24.5}
              style={styles.icon}
            />
          )}
          {item.type !== "MaterialCommunicyIcons" && (
            <MaterialIcon name={item.icon} size={24.5} style={styles.icon} />
          )}
          <View styles={{ flex: 1 }} />
        </View>
        <Text style={styles.text}>{item.detail}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icon: {
    marginRight: 5,
    marginLeft: 1,
    flex: 1,
  },
  text: {
    fontSize: Theme.fontSize.normal,
    flexWrap: "wrap",
    flexShrink: 1,
  },
});

export default Details;
