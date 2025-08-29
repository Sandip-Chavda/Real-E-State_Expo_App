import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Image from '../Image';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '~/core/theme/colors';

type CardProps = {
  property: Property;
};

const Card = ({ property }: CardProps) => {
  return (
    <View className="flex-1 p-2">
      <Image source={property.images[0]} />
      <BlurView
        intensity={100}
        tint="light"
        className="absolute bottom-4 right-4 overflow-hidden rounded-xl p-2">
        <Ionicons name="heart" size={24} color={COLORS.primary} />
      </BlurView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
