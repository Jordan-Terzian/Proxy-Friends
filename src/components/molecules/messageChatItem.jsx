import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';

const MessageChatItem = ({ message, onDelete }) => {

    const navigation = useNavigation();


    // Swipeable right action to show delete button
    const renderRightActions = () => {
        return (
            <TouchableOpacity onPress={() => onDelete(message)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        );
    };


    const onPress = () => {
        // Navigate to the chat screen
        if (message?.isEvent) {
            navigation.navigate('MessageChatEvent', {
                messageInfo: message,
            });

        } else {
            navigation.navigate('MessageChatPerson', {
                messageInfo: message,
            });
        }
    }

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    source={{ uri: message?.image }}
                    style={message?.isEvent ? styles.squareImage : styles.roundImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{message?.name}</Text>
                    <Text style={styles.message}>{message?.lastMessage}</Text>
                </View>
                <Text style={styles.time}>{message?.timeSent}</Text>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        justifyContent: 'space-between',
    },
    roundImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    squareImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#6e6e6e',
    },
    time: {
        fontSize: 12,
        color: '#6e6e6e',
        alignSelf: 'flex-start',
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75, 
        height: '100%',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default MessageChatItem;
