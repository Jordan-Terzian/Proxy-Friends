import React from 'react';

import { StyleSheet, View } from 'react-native';

import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const BackNextButton = ({
    direction = 'back',
    nextScreen,
    onPressNext,
    ...props
}) => {

    const navigation = useNavigation();

    const handlePress = () => {
        if (direction === 'back') {
            navigation.goBack();
            return;
        }
        if (direction === 'next') {
            onPressNext();
        }
    }

    return (
        <View style={direction === 'next' ? styles.mirrorFlip : {}}>
            <HeaderBackButton
                testID="back-button"
                onPress={handlePress}
                disabled={props.isDisabled}  // Add this line
                labelStyle={[direction === 'next' ? styles.mirrorFlip : {}, props.isDisabled ? styles.disabled : {}]}  // Add styles for disabled state
                tintColor={props.isDisabled ? '#cccccc' : 'black'}  // Change color if disabled
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mirrorFlip: {
        transform: [{ scaleX: -1 }]
    },
    disabled: {
        color: '#cccccc', // Style for disabled state
    },
});

export default BackNextButton;
