// MessageChatScreenPerson.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import MessageHeader from '../../components/molecules/messageHeader';
import MessageInput from '../../components/molecules/messageInput';
import MessageBubble from '../../components/molecules/messageBubble';
import { useNavigation } from '@react-navigation/native';
import MessageOverlay from '../../components/organisms/messageOverlay';

const MessageChatScreenPerson = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [messages, setMessages] = useState([
        route.params.messageInfo // Initialize with the message from messageInfo
    ]);

    const sendMessage = (newMessage) => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Exclude seconds

        setMessages([
            ...messages,
            {
                ...route.params.messageInfo, // Use other messageInfo data for consistency
                lastMessage: newMessage,
                isSent: true, // Flag to indicate that this is a sent message
                timeSent: formattedTime, // Set the formatted time as the sent time
            }
        ]);
    };

    const [overlayVisible, setOverlayVisible] = useState(false);

    // Functions for overlay actions
    const handleBlock = () => {
        // Logic for blocking
        console.log('Blocking user');
        setOverlayVisible(false);
    };

    const handleReport = () => {
        // Logic for reporting
        console.log('Reporting user');
        navigation.navigate('ReportAProblem', { userIssue: true });
        setOverlayVisible(false);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View style={styles.headerContainer}>
                <MessageHeader
                    image={route.params.messageInfo?.image}
                    name={route.params.messageInfo?.name} 
                    onDotPress = {() => setOverlayVisible(true)}
                    userInfo = {route.params.messageInfo}
                    />
            </View>
            <ScrollView style={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <MessageBubble
                        key={index}
                        message={msg.lastMessage}
                        isSent={msg.isSent}
                        imageUri={!msg.isSent ? msg.image : undefined}
                        time={msg.timeSent}
                    />
                ))}
            </ScrollView>

            <MessageInput onSend={sendMessage} />

            <MessageOverlay
                isVisible={overlayVisible}
                onClose={() => setOverlayVisible(false)}
                name={route.params.messageInfo?.name}
                onBlock={handleBlock}
                onReport={handleReport}
            />

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20
    },
    messagesContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    icon: {
        marginHorizontal: 10,
    },
    messagesContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
});

export default MessageChatScreenPerson;
