import React from 'react';

import BackNextButton from '../atoms/backNextButton';
import Header from '../atoms/header';




const HeaderNavigation = ({
    title = '',
    backLabel = 'Back',
    headerBackVisible = true,
    headerNextVisible = true,
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
            headerRight={() => {
                return (
                    headerNextVisible && (
                        <BackNextButton
                            direction="next"
                            label={nextLabel}
                            labelVisible={true}
                            nextScreen={nextScreen}
                            validate={validate}
                        />
                    )
                );
            }}
            {...props}
        />
    );
};

export default HeaderNavigation;
