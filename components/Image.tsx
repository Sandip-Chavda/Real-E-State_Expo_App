import { ImageStyle, StyleProp, StyleSheet } from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import React from 'react';

type ImageProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const defaultStyles: ImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 16,
};

const Image = ({ source, style }: ImageProps) => {
  return (
    <ExpoImage
      source={source}
      style={[defaultStyles, style]}
      placeholder={{
        blurhash: 'LEHLk~WB2yk8pyo0adR*.7kCMdnj',
      }}
      contentFit="cover"
      transition={1000}
    />
  );
};

export default Image;

const styles = StyleSheet.create({});
