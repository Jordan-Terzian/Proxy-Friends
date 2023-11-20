import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import Metrics from '../../constants/metrics';

const SlideUpMenu = (props) => {
    const menuHeight = props.menuHeight ? props.menuHeight : Metrics.screenWidth;

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.closeMenu}
            swipeDirection={['down']}
            backdropOpacity={0.4}
            onSwipeComplete={props.closeMenu}
            animationInTiming={300}
            animationOutTiming={400}
            style={styles.modal}
        >
            <View style={[styles.slideUpMenuContainer, { maxHeight: menuHeight }]}>
                <View style={styles.lineIndicator} />
                <View style={styles.internalComponent}>
                    {props.header}
                </View>
                <View style={styles.internalComponent}>
                    {props.body}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end', // position the modal at the bottom
        margin: 0
    },
    slideUpMenuContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'white',
        width: Metrics.screenWidth,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        paddingBottom: 50,
        marginBottom: 0
    },
    lineIndicator: {
        width: Metrics.screenWidth / 6,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 50,
        marginTop: 10
    },
    internalComponent: {
        backgroundColor: 'white',
        width: Metrics.screenWidth,
        alignItems: 'flex-start'
    }
});

export default SlideUpMenu;
