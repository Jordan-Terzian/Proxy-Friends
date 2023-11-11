import React, { useState } from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

import TimeDateModal from "../atoms/modalDateTimePicker";

import UseToggle from "../../utils/useToggle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import createInputPillStyle from "../../screens/styles/inputPillStyle";

const DatePickerField = ({
  placeholder = "dd/mm/yyyy",
  style,
  showIcon,
  mode,
}) => {
  const viewStyles = createInputPillStyle();

  const [date, setDate] = useState(null);
  const { value: visible, setFalse: hide, setTrue: unhide } = UseToggle(false);

  const handleConfirm = (selectedDate) => {
    hide();
    setDate(selectedDate);
  };

  const handleShowPicker = () => {
    unhide();
  };

  // Function to format date in DD/MM/YYYY format
  const formatDate = (date) => {
    if (!date) return placeholder;
    const day = date.getDate();
    const month = date.getMonth() + 1; // January is 0!
    const year = date.getFullYear();
    return `${day < 10 ? `0${day}` : day}/${
      month < 10 ? `0${month}` : month
    }/${year}`;
  };

  const formatDateTime = (date) => {
    if (!date) return placeholder;
    console.log(date);
    const day = date.getDate();
    const month = date.getMonth() + 1; // January is 0!
    const year = date.getFullYear();

    return `${day < 10 ? `0${day}` : day}/${
      month < 10 ? `0${month}` : month
    }/${year} ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <>
      <TouchableOpacity
        style={[viewStyles.InputPill, style]}
        onPress={handleShowPicker}
      >
        {showIcon && (
          <MaterialCommunityIcons name={"calendar"} size={24} color="#636363" />
        )}

        <Text
          style={[
            styles.dateFieldText,
            { fontSize: 16, color: !date ? "#636363" : "#000000" },
          ]}
        >
          {(mode === null || mode === "date") && formatDate(date, placeholder)}
          {mode === "datetime" && formatDateTime(date, placeholder)}
        </Text>
      </TouchableOpacity>
      <TimeDateModal
        isVisible={visible}
        onConfirm={handleConfirm}
        onCancel={hide}
        mode={mode ?? "date"}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dateFieldIcon: {
    marginRight: 8,
    marginTop: -3,
  },
  dateFieldText: {
    flex: 1,
  },
});

export default DatePickerField;
