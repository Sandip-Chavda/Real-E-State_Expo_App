import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageWithSquircle from '../ImageWithSquircle';
import { WIDTH } from '~/core/utils/layout';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Typo from '../Text';
import { COLORS } from '~/core/theme/colors';

type PropertyImageProps = {
  imageUrl: string;
  rating: number;
  isFavorite: boolean;
};

const PropertyImage = ({ imageUrl, rating = 5, isFavorite = false }: PropertyImageProps) => {
  return (
    <View className="relative ">
      <View className="flex flex-row items-center justify-center">
        <ImageWithSquircle image={imageUrl} width={WIDTH - 40} />
      </View>
      <BlurView
        tint="light"
        intensity={80}
        className="absolute bottom-8 left-8 flex flex-row items-center overflow-hidden rounded-2xl p-2">
        <Ionicons name="star" color={'#facc15'} size={24} />
        <Typo className="mx-2 text-white">{rating}</Typo>
      </BlurView>
      <BlurView
        tint="light"
        intensity={80}
        className="absolute bottom-8 right-8 overflow-hidden rounded-2xl p-2">
        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} color={COLORS.primary} size={24} />
      </BlurView>
    </View>
  );
};

export default PropertyImage;

const styles = StyleSheet.create({});
