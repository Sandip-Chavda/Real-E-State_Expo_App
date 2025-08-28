import { Pressable, StyleSheet, View } from 'react-native';
import Image from '../Image';
import Typo from '../Text';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { COLORS } from '~/core/theme/colors';
import CarouseItem from './CarouseItem';

interface CardProps {
  property: Property;
}

const Card = ({ property }: CardProps) => {
  return (
    <View className="border-b border-gray-200 px-4 py-4">
      <View className="relative">
        <View>
          <CarouseItem property={property} />
        </View>
        <View className="">
          <BlurView className="absolute bottom-4 left-8 flex flex-row items-center overflow-hidden rounded-xl p-2 ">
            <Ionicons name="star" color={'#facc15'} size={24} />
            <Typo className="mx-2 text-white">4.9</Typo>
          </BlurView>
          <Pressable className="absolute bottom-4 right-8">
            <BlurView className="overflow-hidden rounded-2xl p-2">
              <Ionicons
                name={property.is_favorite ? 'heart' : 'heart-outline'}
                color={'#ef4444'}
                size={24}
              />
            </BlurView>
          </Pressable>
        </View>
        <View className="px-2">
          <View className="flex flex-row items-center justify-between py-2">
            <View>
              <Typo variant="subtitle">{property.name}</Typo>
              <Typo variant="caption" className="text-gray-500">
                {property.amenities}
              </Typo>
            </View>
            <View>
              <Typo variant="caption">
                Starts at {property.country} ${property.price_per_night}
              </Typo>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
