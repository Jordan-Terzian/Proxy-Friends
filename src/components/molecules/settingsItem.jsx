import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Make sure to install @react-navigation/native

const SettingsItem = ({ iconName, text, nextScreen }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(nextScreen);
    };

    const isLogoutOrDelete = text === 'Logout' || text === 'Delete Account';

    return (
        <TouchableOpacity onPress={handlePress} style={styles.itemContainer}>
            <MaterialCommunityIcons 
                name={iconName} 
                size={26} 
                style={[styles.icon, isLogoutOrDelete && styles.iconRed]} 
            />
            <Text style={[styles.itemText, isLogoutOrDelete && styles.textRed]}>{text}</Text>
            {!isLogoutOrDelete && <MaterialCommunityIcons name="chevron-right" size={26} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingHorizontal: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    icon: {
        marginRight: 20,
        marginLeft: 10,
        color: '#ACBEFC',
    },
    iconRed: {
        color: 'red', // Change icon color to red
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textRed: {
        color: 'red', // Change text color to red
    },
});

export default SettingsItem;
