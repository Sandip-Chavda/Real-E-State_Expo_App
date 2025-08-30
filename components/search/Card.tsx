import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageWithSquircle from '../ImageWithSquircle';
import { WIDTH } from '~/core/utils/layout';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '~/core/theme/colors';
import Typo from '../Text';

type CardProps = {
  property: Property;
};

const Card = ({ property }: CardProps) => {
  return (
    <Pressable className="border-b border-gray-200 p-4">
      <View className="relative">
        <View className="mb-4 flex items-center overflow-hidden">
          <ImageWithSquircle image={property.images[0]} width={WIDTH - 40} />
        </View>
        <View className="absolute right-6 top-6">
          <Ionicons
            name={property.is_favorite ? 'heart' : 'heart-outline'}
            size={24}
            color={COLORS.primary}
          />
        </View>
      </View>

      <View className="px-2">
        <View className="flex flex-row items-center">
          <Typo className="">
            {property.name}, {property.country}
          </Typo>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({});
