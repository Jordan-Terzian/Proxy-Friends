import React from 'react';

import { StyleSheet, View } from 'react-native';

import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const BackNextButton = ({
    direction = 'back',
    nextScreen,
    validate,
    ...props
}) => {

    const navigation = useNavigation();

    const handlePress = () => {
        if (direction === 'back') {
            navigation.goBack();
            return;
        }
        if (direction === 'next' && nextScreen && (!validate || validate())) {
            navigation.navigate(nextScreen);
        }
    }

    return (
        <View style={direction === 'next' ? styles.mirrorFlip : {}}>
            <HeaderBackButton
                testID="back-button"
                onPress={handlePress}
                labelStyle={direction === 'next' ? styles.mirrorFlip : {}}
                tintColor={'black'}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mirrorFlip: {
        transform: [{ scaleX: -1 }]
    }
});

export default BackNextButton;
