// MessageHeader.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MessageHeader = ({ image, name, onDotPress, userInfo }) => {
    const navigation = useNavigation();
    const [overlayVisible, setOverlayVisible] = useState(false);

    const onPress = () => {
        navigation.navigate('ViewUserProfile', { userInfo: userInfo });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: image }} style={styles.profilePic} />
            </TouchableOpacity>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="phone" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="video" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDotPress}>
                    <MaterialCommunityIcons name="dots-vertical" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ACBEFC',
        borderRadius: 20,
        marginHorizontal: 5,
        marginTop: 10,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 80,
    },
});

export default MessageHeader;
