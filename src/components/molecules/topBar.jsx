
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title, backLabel, nextLabel, handlePost, disablePost, handleCancel }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.topBar}>
            <TouchableOpacity onPress={handleCancel} style={styles.button}>
                <Text style={styles.cancelButtonText}>{backLabel}</Text>
            </TouchableOpacity>
            <Text style={styles.topBarTitle}>{title}</Text>
            <TouchableOpacity
                onPress={handlePost}
                style={[styles.button, disablePost && styles.disabledButton]}
                disabled={disablePost}
            >
                <Text style={[styles.postButtonText, disablePost && styles.disabledText]}>
                    {nextLabel}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 3,
        paddingBottom: 10,
    },
    button: {
        paddingHorizontal: 10,
    },
    postButtonText: {
        color: "#2F88FF",
        fontSize: 15,
    },
    cancelButtonText: {
        color: "black",
        fontSize: 15,
    },
    topBarTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    disabledButton: {
        opacity: 0.5
    },
    disabledText: {
        color: "#ccc" // Grey color for disabled text
    }
})