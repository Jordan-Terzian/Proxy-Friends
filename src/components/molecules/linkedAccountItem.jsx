import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const LinkedAccountItem = ({ iconName, text }) => {
    return (
        <View style={styles.itemContainer}>
            <Ionicons
                name={iconName}
                size={26}
                style={styles.icon}
            />
            <Text style={styles.itemText}>{text}</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="trash-can" size={26} style={styles.iconRed} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingHorizontal: 16, 
    },
    icon: {
        marginRight: 20,
        color: '#ACBEFC', 
    },
    iconRed: {
        color: 'red', 
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000', 
    },
});

export default LinkedAccountItem;
