import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconButton = ({ icon, onPress, size = 24, style, ...props }) => {
    const styles = createStyles(size);
    return (
        <TouchableOpacity
            style={[styles.button, { width: size * 1.4, height: size * 1.4 }, style]}
            onPress={onPress}
            {...props}
        >
            <MaterialCommunityIcons name={icon} size={size} />
        </TouchableOpacity>
    );
};

const createStyles = (size) => StyleSheet.create({
    button: {
        borderRadius: 200,
        width: size * 1.4,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default IconButton;
