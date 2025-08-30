import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '~/core/theme/colors';
import Typo from '../Text';

export type AmenityType =
  | 'WiFi'
  | 'Kitchen'
  | 'Pool'
  | 'Air conditioning'
  | 'Pet friendly'
  | 'Free parking';

type AmenitiesListProps = {
  amenities: string;
};

const AmenityIcon: Record<AmenityType, keyof typeof Ionicons.glyphMap> = {
  'Air conditioning': 'snow',
  'Pet friendly': 'paw',
  Kitchen: 'restaurant-sharp',
  Pool: 'water',
  WiFi: 'wifi',
  'Free parking': 'car',
};

const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  const allAmenities = amenities.split(', ') as AmenityType[];

  return (
    <View className="my-4 flex-row flex-wrap  gap-2 pb-8">
      {allAmenities.map((amenity, index) => {
        return (
          <View
            className="mx-1 flex h-20 w-[30%]  items-center justify-center gap-2 rounded-2xl bg-white p-2"
            key={index}>
            <Ionicons name={AmenityIcon[amenity]} size={24} color={COLORS.primary} />
            <Typo className="text-center" variant="body-primary">
              {amenity}
            </Typo>
          </View>
        );
      })}
    </View>
  );
};

export default AmenitiesList;

const styles = StyleSheet.create({});
