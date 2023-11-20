import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AttendeesItem = ({ message }) => {

    const navigation = useNavigation();


    const onPress = () => {
        navigation.navigate('ViewUserProfile', {
            userInfo: message,
        })

    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                source={{ uri: message?.image }}
                style={styles.roundImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{message?.name}</Text>
            </View>
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
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AttendeesItem;
