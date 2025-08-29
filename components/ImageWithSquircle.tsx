import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Squircle from 'react-native-squircle';
import { Image, useImage } from '@shopify/react-native-skia';

type ImageWithSquircleProps = {
  image: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

const ImageWithSquircle = ({
  image,
  borderRadius = 40,
  height = 280,
  width = 256,
}: ImageWithSquircleProps) => {
  const imageUrl = useImage(image);

  return (
    <Squircle
      style={{
        width,
        height,
        marginHorizontal: 4,
      }}
      borderRadius={borderRadius}
      maskChildren={<Image width={width} height={height} image={imageUrl} fit={'cover'} />}
    />
  );
};

export default ImageWithSquircle;

const styles = StyleSheet.create({});
