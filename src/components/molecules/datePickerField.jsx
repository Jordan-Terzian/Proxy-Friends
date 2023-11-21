import React, { useState } from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

import TimeDateModal from "../atoms/modalDateTimePicker";

import UseToggle from "../../utils/useToggle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import createInputPillStyle from "../../screens/styles/inputPillStyle";
import { formatDate, formatDateTime } from "../../utils/datetime";

const DatePickerField = ({
  placeholder = "dd/mm/yyyy",
  style,
  showIcon,
  mode,
  onConfirm,
  selectedDate // New prop for the date, used only in datetime mode
}) => {
  const viewStyles = createInputPillStyle();

  const [date, setDate] = useState(null); // Internal state for modes other than datetime
  const { value: visible, setFalse: hide, setTrue: unhide } = UseToggle(false);

  const handleConfirm = (selectedDate) => {
    hide();
    if (mode === "datetime") {
      if (onConfirm) {
        onConfirm(selectedDate);
      }
    } else {
      setDate(selectedDate);
      if (onConfirm) {
        onConfirm(selectedDate);
      }
    }
  };

  const handleShowPicker = () => {
    unhide();
  };

  const displayDate = mode === "datetime" ? selectedDate : date;

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
            { fontSize: 16, color: !displayDate ? "#636363" : "#000000" },
          ]}
        >
          {(mode === undefined || mode === "date") && formatDate(displayDate, placeholder)}
          {mode === "datetime" && formatDateTime(displayDate, placeholder)}
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
