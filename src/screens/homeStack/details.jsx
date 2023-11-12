import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { default as MaterialCommunityIcon } from "react-native-vector-icons/MaterialCommunityIcons";
import { default as MaterialIcon } from "react-native-vector-icons/MaterialIcons";
import Theme from "../../constants/theme";
import Tag from "../../components/atoms/tag";

const Details = ({ data }) => {
  const renderItem = ({ item }) => {
    if (item.type === "imageItem") {
      return;
    }
    return (
      <TouchableWithoutFeedback>
        <View style={styles.row}>
          {item.type === "iconItem" && (
            <>
              <View style={styles.iconContainer}>
                {item.iconType === "MaterialCommunicyIcons" && (
                  <MaterialCommunityIcon
                    name={item.icon}
                    size={24.5}
                    style={styles.icon}
                  />
                )}
                {item.iconType !== "MaterialCommunicyIcons" && (
                  <MaterialIcon
                    name={item.icon}
                    size={24.5}
                    style={styles.icon}
                  />
                )}
                <View styles={{ flex: 1 }} />
              </View>
              <Text style={styles.text}>{item.detail}</Text>
            </>
          )}

          {item.type === "interestsGrid" && (
            <View style={styles.interestsContainer}>
              <Text style={styles.interestsGridTitle}>Interests</Text>

              {item.interests.length > 0 && (
                <View style={styles.gridContainer}>
                  {item.interests.map((interest, index) => (
                    <View key={index} style={styles.gridItem}>
                      <Tag key={interest} value={interest} />
                    </View>
                  ))}
                </View>
              )}
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
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
  interestsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  interestsGridTitle: {
    fontSize: Theme.fontSize.normal,
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  gridItem: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    marginHorizontal: 5,
  },
});

export default Details;
