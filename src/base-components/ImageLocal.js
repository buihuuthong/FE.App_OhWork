import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';

const ImageLocal = props => {
  if (!props.image) {
    return null;
  }
  if (props.onPress !== null) {
    return (
      <Pressable onPress={props.onPress}>
        <FastImage
          source={props.image.source}
          tintColor={props.image.color || props.color}
          resizeMode={props.image.resizeMode ?? 'contain'}
          style={[
            {
              width: props.image.width || props.width,
              height: props.image.height || props.height,
            },
            props.style,
          ]}>
          {props.children}
        </FastImage>
      </Pressable>
    );
  }
  return (
    <FastImage
      pointerEvents={'none'}
      source={props.image.source}
      tintColor={props.image.color || props.color}
      resizeMode={props.image.resizeMode ?? 'contain'}
      style={[
        {
          width: props.width || props.image.width,
          height: props.height || props.image.height,
        },
        props.style,
      ]}>
      {props.children}
    </FastImage>
  );
};

export default ImageLocal;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 10,
  },
});
