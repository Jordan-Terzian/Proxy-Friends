import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const Grid = ({ data, columns }) => {
  const renderGridItem = ({ item }) => {
    return <View style={styles.gridItem}>{item}</View>;
  };

  return (
    <FlatList
      data={data}
      numColumns={columns}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    // height: 100, // Adjust the height to your liking
  },
});

export default Grid;
