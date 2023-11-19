import React, { useState, useEffect } from "react";

import { StyleSheet, View, TextInput, Text } from "react-native";

import Metrics from "../../constants/metrics";

const BioInputField = ({
  placeholder,
  style,
  Icon,
  inputLimit,
  onChangeText,
  value,
  ...textInputProps
}) => {
  const styles = createStyles();

  const [text, setText] = useState(value || "");

  // Update text state when value prop changes
  useEffect(() => {
    setText(value || "");
  }, [value]);

  const handleTextChange = (inputText) => {
    if (inputLimit && inputText.length > inputLimit) {
      inputText = inputText.substring(0, inputLimit);
    }
    setText(inputText);
    if (onChangeText) {
      onChangeText(inputText);
    }
  };

  const displayedTextLength =
    inputLimit && text.length > inputLimit ? inputLimit : text.length;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        onChangeText={handleTextChange}
        maxLength={inputLimit ?? undefined}
        placeholder={placeholder}
        value={text}
        style={{ flex: 1 }}
        placeholderTextColor={"#636363"}
        multiline={true}
        {...textInputProps}
      />
      {inputLimit && (
        <Text style={[styles.counter, textInputProps.counterTextStyle]}>
          {displayedTextLength}/{inputLimit}
        </Text>
      )}
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    container: {
      justifyContent: "space-between",
      height: Metrics.screenWidth * 0.3,
      borderRadius: 15,
      backgroundColor: "#DDE2F5",
      padding: Metrics.screenWidth * 0.02,
      paddingHorizontal: Metrics.screenWidth * 0.035,
    },
    counter: {
      alignSelf: "flex-end",
      color: "#636363",
    },
  });

export default BioInputField;
