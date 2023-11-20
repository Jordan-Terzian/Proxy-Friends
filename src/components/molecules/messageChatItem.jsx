import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageChatItem = ({ message }) => {

    const navigation = useNavigation();


    const onPress = () => {
        // Navigate to the chat screen
        navigation.navigate('MessageChatPerson', {
            messageInfo: message,
        });
    }

    return (
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
        alignSelf: 'flex-start', // Align self to flex-start to move it to the top
    },
});

export default MessageChatItem;
