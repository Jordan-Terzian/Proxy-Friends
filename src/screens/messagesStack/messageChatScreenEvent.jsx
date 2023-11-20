import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MessageHeader from '../../components/molecules/messageHeader';
import MessageInput from '../../components/molecules/messageInput';
import MessageBubble from '../../components/molecules/messageBubble';
import MessageOverlay from '../../components/organisms/messageOverlay';
import { useNavigation } from '@react-navigation/native';

const MessageChatScreenEvent = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [messages, setMessages] = useState([

        // Margot's data
        {
            name: "Margot Robbie",
            bio: "Australian Actress",
            dateOfBirth: "2002-10-19T07:01:54.207Z",
            gender: "Female",
            image: "https://people.com/thmb/NwJzLwy5IvwRLgvTFGK_4fvC1SY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x305:1001x307)/Margot-Robbie-011723-2000-f45fe72c86f24029ae2215b399356460.jpg",
            selectedInterests: ["Acting", "Movies", "DC"],
            isEvent: false,
            lastMessage: "Can't wait to meet you all!",
            timeSent: "2 days ago"
        },
        // Additional user's data
        {
            name: "Chris Hemsworth",
            bio: "Australian Actor",
            dateOfBirth: "1983-08-11T07:01:54.207Z",
            gender: "Male",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg",
            selectedInterests: ["Acting", "Fitness", "Movies"],
            isEvent: false,
            lastMessage: "Excited about the event!",
            timeSent: "Yesterday"
        }
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
    const handleViewAttendees = () => {
        // Logic for blocking
        navigation.navigate('Attendees', {
            attendees: messages 
        });
        setOverlayVisible(false);
    };

    const handleLeaveEvent = () => {
        // Logic for reporting
        console.log('Leave event');
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
                    isEvent = {true}
                    onDotPress={() => setOverlayVisible(true)}
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
                onViewAttendees={handleViewAttendees}
                onLeaveEvent={handleLeaveEvent}
                isEvent={true}
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

export default MessageChatScreenEvent;
