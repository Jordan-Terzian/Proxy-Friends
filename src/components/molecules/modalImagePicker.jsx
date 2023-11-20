import React from 'react';
import { View } from 'react-native';
import ImagePickerCropper from './imagePickerCropper';
import SlideUpMenu from './slideUpMenu';

const ModalImagePicker = (props) => {
  const { onImagePicked, isVisible, toggleVisibility } = props;

  return (
    <SlideUpMenu
      isVisible={isVisible}
      closeMenu={toggleVisibility}
      body={
        <View style={{ flexDirection: 'column' }}>
          <ImagePickerCropper
            pickerType={'Library'}
            icon={'image'}
            label={'Choose Photo'}
            onImageSelected={(uri) => {
              if (onImagePicked) {
                onImagePicked(uri);
              }
              toggleVisibility(); // Close the menu
            }}
          />
          <ImagePickerCropper
            pickerType={'Camera'}
            icon={'camera'}
            label={'Take Photo'}
            onImageSelected={(uri) => {
              if (onImagePicked) {
                onImagePicked(uri);
              }
              toggleVisibility(); // Close the menu
            }}
          />
        </View>
      }
    />
  );
};

export default ModalImagePicker;
