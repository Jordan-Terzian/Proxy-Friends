// MessageInput.jsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MessageInput = ({ onSend, placeholder = 'Message...' }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <View style={styles.container}>

            <TextInput
                value={text}
                onChangeText={setText}
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor="#636363"
            />
            <TouchableOpacity>
                <MaterialCommunityIcons name="image-multiple" size={24} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="microphone-outline" size={24} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSend}>
                <MaterialCommunityIcons name="send" size={24} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#DDE2F5',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 5
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
    },
    icon: {
        marginHorizontal: 5,
        color: 'black',
    },
});

export default MessageInput;
