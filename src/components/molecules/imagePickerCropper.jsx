import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ImagePickerCropper = ({ pickerType, icon, label, style, onImageSelected }) => {
    const handlePress = async () => {
        if (pickerType === 'Library') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [3, 4], // or whatever aspect ratio you want
                quality: 1,
            });
            
            if (!result.cancelled) {
                onImageSelected(result.assets[0].uri);
            }
        } else if (pickerType === 'Camera') {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [3, 4],
                quality: 1,
            });

            if (!result.cancelled) {
                onImageSelected(result.assets[0].uri);
            }
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, style]}>
            <View style={styles.row}>
                <MaterialCommunityIcons
                    name={icon}
                    size={25}
                    color='black' />
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    button: {},
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10
    }
});

export default ImagePickerCropper;
