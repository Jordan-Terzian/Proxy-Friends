import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "../atoms/iconButton";
import Metrics from "../../constants/metrics";

const TextInputIcon = ({
  secureTextEntry,
  icon,
  placeholder,
  inputLimit,
  value,
  ...textInputProps
}) => {
  const [text, setText] = useState(value || "");
  const [hidden, setHidden] = useState(secureTextEntry);

  useEffect(() => {
    setText(value || "");
  }, [value]);

  const handleTextChange = (inputText) => {
    if (inputLimit && inputText.length > inputLimit) {
      inputText = inputText.substring(0, inputLimit);
    }
    setText(inputText, textInputProps);
    if (textInputProps.onChangeText) {
      textInputProps.onChangeText(inputText);
    }
  };

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  const displayedTextLength =
    inputLimit && text.length > inputLimit ? inputLimit : text.length;

  return (
    <View style={[styles.inputContainer, textInputProps.containerStyle]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          style={{ color: "#636363", marginRight: 10 }}
        />
      )}
      <TextInput
        onChangeText={handleTextChange}
        maxLength={inputLimit ?? undefined}
        placeholder={placeholder}
        placeholderTextColor={"#636363"}
        secureTextEntry={hidden}
        value={text}
        {...textInputProps}
      />
      {inputLimit && (
        <Text style={[styles.counter, textInputProps.counterTextStyle]}>
          {displayedTextLength}/{inputLimit}
        </Text>
      )}
      {secureTextEntry && (
        <IconButton
          icon={hidden ? "eye-off" : "eye"}
          onPress={toggleHidden}
          style={styles.iconButtonStyle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#DDE2F5",
    borderRadius: 50,
    height: Metrics.screenWidth * 0.09,
    minHeight: 34,
    alignItems: "center",
    justifyContent: "left",
    paddingHorizontal: Metrics.screenWidth * 0.035,
  },
  counter: {
    textAlign: "right",
    color: "#636363",
    marginLeft: "auto",
  },
  iconButtonStyle: {
    position: "absolute",
    right: 10,
  },
});

export default TextInputIcon;
