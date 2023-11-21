import React from 'react';

import { StyleSheet, View } from 'react-native';

import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/themeContext';

const BackNextButton = ({
    direction = 'back',
    nextScreen,
    onPressNext,
    isDisabled,
    ...props
}) => {

    const navigation = useNavigation();

    const {theme, setTheme} = useTheme();

    const handlePress = () => {
        if (direction === 'back') {
            navigation.goBack();
            setTheme('Light')
            return;
        }
        if (direction === 'next') {
            onPressNext();
        }
    }

    const tintColor = isDisabled ? '#cccccc' : (theme === 'Dark' ? 'white' : 'black');

    return (
        <View style={direction === 'next' ? styles.mirrorFlip : {}}>
            <HeaderBackButton
                testID="back-button"
                onPress={handlePress}
                disabled={isDisabled}
                labelStyle={[
                    direction === 'next' ? styles.mirrorFlip : {},
                    isDisabled ? styles.disabled : {},
                    theme === 'Dark' && !isDisabled ? styles.whiteColor : {} // Only apply white color if dark mode is enabled and button is not disabled
                ]}
                tintColor={tintColor} 
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
    whiteColor: {
        color: 'white', // Add this for white text color
    },
});

export default BackNextButton;
