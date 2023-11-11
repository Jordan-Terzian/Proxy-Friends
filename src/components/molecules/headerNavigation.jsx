import React from 'react';

import BackNextButton from '../atoms/backNextButton';
import Header from '../atoms/header';
import IconButton from '../atoms/iconButton';




const HeaderNavigation = ({
    title = '',
    backLabel = 'Back',
    headerBackVisible = true,
    headerNextVisible = true,
    addButtonVisible = false,
    onAddPress, // Accept an onAddPress prop
    nextLabel = 'Next',
    nextScreen,
    validate,
    ...props
}) => {
    return (
        <Header
            title={title}
            backButtonProps={{
                label: backLabel,
                labelVisible: true
            }}
            headerBackVisible={headerBackVisible}
            headerRight={() => (
                <>
                    {headerNextVisible && (
                        <BackNextButton
                            direction="next"
                            label={nextLabel}
                            labelVisible={true}
                            nextScreen={nextScreen}
                            validate={validate}
                        />
                    )}
                    {addButtonVisible && (
                        <IconButton
                            icon="plus"
                            onPress={onAddPress} // Use the onAddPress prop here
                            size={24}
                        />
                    )}
                </>
            )}
            {...props}
        />
    );
};

export default HeaderNavigation;
