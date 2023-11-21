import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import createMessageStackStyles from '../styles/messageStackStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageChatItem from '../../components/molecules/messageChatItem';
import TextInputIcon from '../../components/molecules/textInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MessageHomeScreen = () => {
  const MessageStackStyles = createMessageStackStyles();
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const defaultMessagesData = [
      {
        bio: "Australian Actress",
        dateOfBirth: "2002-10-19T07:01:54.207Z",
        gender: "Female",
        image: "https://people.com/thmb/NwJzLwy5IvwRLgvTFGK_4fvC1SY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x305:1001x307)/Margot-Robbie-011723-2000-f45fe72c86f24029ae2215b399356460.jpg",
        name: "Margot Robbie",
        selectedInterests: ["Acting", "Movies", "DC"],
        isEvent: false,
        lastMessage: "Hello world",
        timeSent: "2:22pm"
      },
      {
        name: "IMAX Sydney",
        isEvent: true,
        image: "https://static.ffx.io/images/$zoom_0.378%2C$multiply_0.9735%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/9b1d1bf943b5a1ba03311fff18158644e348fd4f",
        lastMessage: "Chris: Excited about the event!",
        timeSent: "Yesterday",
        id:"1"
      }
    ];

    const initializeMessages = async () => {
      try {
        let messagesData = await AsyncStorage.getItem('@Messages');
        let existingMessages = messagesData ? JSON.parse(messagesData) : [];
  
        // Combine existing messages with default messages, avoiding duplicates
        let mergedMessages = [...defaultMessagesData, ...existingMessages.filter(
          (m) => !defaultMessagesData.some((dm) => dm.name === m.name)
        )];
  
        await AsyncStorage.setItem('@Messages', JSON.stringify(mergedMessages));
        setMessages(mergedMessages);
      } catch (e) {
        console.log(e);
      }
    };
  
    initializeMessages();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const loadMessagesData = async () => {
        try {
          const messagesData = await AsyncStorage.getItem('@Messages');
          if (messagesData !== null) {
            setMessages(JSON.parse(messagesData));
          }
          console.log(messagesData);
        } catch (e) {
          console.log(e);
        }
      };

      loadMessagesData();
    }, [])
  );


  const filteredMessages = messages.filter(message =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteMessage = async (messageToDelete) => {
    const updatedMessages = messages.filter(message => message !== messageToDelete);
    setMessages(updatedMessages);
    try {
      await AsyncStorage.setItem('@Messages', JSON.stringify(updatedMessages));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={MessageStackStyles.safeAreaView} edges={['bottom']}>
      <View style={styles.searchBar}>
        <TextInputIcon
          icon="magnify"
          placeholder="Search"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)} // Update search query on text change
        />
      </View>

      <ScrollView>
        <View style={MessageStackStyles.container}>
          {filteredMessages.map((message, index) => (
            <MessageChatItem key={index} message={message} onDelete={deleteMessage} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MessageHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    marginTop: 60,
    padding: 20
  }
});
