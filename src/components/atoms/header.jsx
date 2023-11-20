import React from 'react';

import { Header as ReactNavigationHeader } from '@react-navigation/elements';

import BackNextButton from './backNextButton';

const Header = ({
  title = '',
  headerBackVisible = true,
  backButtonProps,
  ...props
}) => {
  return (
    <ReactNavigationHeader
      title={title}
      headerTransparent={true}
      headerLeft={() => {
        return headerBackVisible && <BackNextButton direction="back" {...backButtonProps} />;
      }}
      {...props}
    />
  );
};

export default Header;
