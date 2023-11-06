import { Pressable, StyleSheet, Text, View } from "react-native";

const SelectOption = ({ navigation, selected, children }) => {
  const handlePress = () => {
    if (!selected) {
      navigation.navigate(children);
    }
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={selected ? styles.selected : null} onP>
        <Text
          style={[selected ? styles.selectedText : null, styles.selectionText]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const SelectButton = ({ navigation, options, selected }) => {
  return (
    <View style={[styles.row, styles.container]}>
      {options.map((option, _) => (
        <SelectOption selected={option === selected} navigation={navigation}>
          {option}
        </SelectOption>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: "#5495FF",
    borderRadius: 5,
  },
  selectedText: {
    color: "#fff",
  },
  nonSelectedText: {
    color: "#000000",
  },
  selectionText: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 12,
  },
  container: {
    backgroundColor: "#DDE2F5",
    borderRadius: 5,
    padding: 1,
  },
  row: {
    flexDirection: "row", // Arrange children horizontally in a row
    alignItems: "center", // Adjust alignment as needed
  },
});

export default SelectButton;
