import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextInputIcon from '../molecules/textInput';
import ShapedButton from '../atoms/shapedButton';


// Made a new one as opposed to using the pre-exisitng overlay, since this one doesn't
// have any functionality and is purely used for demonstration purposes

const AddAccountOverlay = ({ isVisible, onClose, title }) => {

    const [inputText, setInputText] = useState('');

    const handleTextChange = (text) => {
        setInputText(text);
    };

    const handleSubmit = () => {
        setInputText(''); // Clear the input field
        onClose(); // Close the overlay
    };


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.centeredView}
                activeOpacity={1}
                onPressOut={onClose} // Will close modal when user taps outside the modal view
            >
                <View style={styles.modalOverlay} />
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <TextInputIcon
                        placeholder="Enter Social media link"
                        style={{ width: '90%' }}
                        icon="link"
                        onChangeText={handleTextChange}
                        value={inputText}
                    />
                    <ShapedButton
                        label="Submit"
                        onPress={handleSubmit}
                        style={{ marginTop: 20, minWidth: '40%' }}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Dim the background
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // Make sure modal content is on top of the overlay
        zIndex: 1
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default AddAccountOverlay;
