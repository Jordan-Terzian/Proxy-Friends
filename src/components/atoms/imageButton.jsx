import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const ImageButton = ({ size = 24, imageUri, ...props }) => {
  const totalSize = size + 2 * size * 0.17;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: totalSize,
          height: totalSize,
          padding: size * 0.17,
        },
        props.style,
      ]}
      {...props}
    >
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: totalSize,
            height: totalSize,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDE2F5",
    borderRadius: 200,
  },
});

export default ImageButton;
