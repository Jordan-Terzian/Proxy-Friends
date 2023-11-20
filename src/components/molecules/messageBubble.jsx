import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MessageBubble = ({ isSent, message, imageUri, time }) => {
    return (
      <View style={[styles.messageContainer, isSent ? styles.sentContainer : styles.receivedContainer]}>
        {!isSent && <Image source={{ uri: imageUri }} style={styles.profileImage} />}
        <View style={[styles.bubble, isSent ? styles.sentBubble : styles.receivedBubble]}>
          <Text style={styles.messageText}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sentContainer: {
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  receivedContainer: {
    justifyContent: 'flex-start',
  },
  sentBubble: {
    backgroundColor: '#0078FF', // A blue color
  },
  receivedBubble: {
    backgroundColor: '#E1E1E1', // A grey color
  },
  messageText: {
    color: 'black',
  },
  time: {
    fontSize: 12,
    marginTop: 4,
  },
  sentContainer: {
    alignItems: 'flex-end',
    marginRight: 8,
    marginLeft: 'auto',
  },
  receivedContainer: {
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  sentTime: {
    color: '#999999',
    textAlign: 'right',
  },
  receivedTime: {
    color: '#999999',
    textAlign: 'left',
  },
  time: {
    marginTop: 4,
    fontSize: 12,
    color: '#999999',
    alignSelf: 'flex-end',
},

});

export default MessageBubble;
