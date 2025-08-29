import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Typo from '../Text';
import Image from '../Image';
import { format } from 'date-fns';
import { SquircleView } from 'expo-squircle-view';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useImageColors } from '~/core/hooks/use-image-colors';

type BookingItemProps = {
  booking: Booking;
};

const CalenderDate = ({ date = new Date() }) => {
  const month = format(date, 'MMM').toUpperCase();
  const day = format(date, 'd').toUpperCase();
  const weekday = format(date, 'EEE').toUpperCase();

  return (
    <SquircleView
      preserveSmoothing
      cornerSmoothing={100}
      backgroundColor={'#f3f4f6'}
      borderRadius={16}
      style={{ paddingVertical: 4, paddingHorizontal: 4 }}>
      <View className="mx-1 flex flex-row items-center justify-center">
        <Typo variant="caption" className="text-center">
          {month}
        </Typo>
      </View>
      <View className="items-center py-2">
        <Typo variant="subtitle" className="text-center">
          {day}
        </Typo>
      </View>
      <View className="items-center p-1">
        <Typo variant="caption" className="text-center text-gray-500">
          {weekday}
        </Typo>
      </View>
    </SquircleView>
  );
};

const BookingItem = ({ booking }: BookingItemProps) => {
  const { colors } = useImageColors(booking.property.images[0]);

  return (
    <View className="mx-4 flex flex-row justify-between">
      <View className="mr-4">
        <CalenderDate date={booking.check_in as unknown as Date} />
      </View>

      <SquircleView
        className="flex-1"
        cornerSmoothing={100}
        preserveSmoothing
        borderRadius={24}
        style={{ overflow: 'hidden' }}
        backgroundColor={'lightgray'}>
        <SquircleView
          borderRadius={24}
          cornerSmoothing={100}
          preserveSmoothing
          style={{ overflow: 'hidden', borderBottomEndRadius: 0, borderBottomStartRadius: 0 }}>
          <View className="h-36 overflow-hidden">
            <Image source={booking.property.images[0]} style={{ height: 256 }} />
          </View>
        </SquircleView>
        <SquircleView
          style={{
            padding: 24,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: colors?.primary,
          }}
          cornerSmoothing={100}
          preserveSmoothing>
          <BlurView intensity={20} tint="dark" className="absolute inset-0" />
          <View className="flex flex-row items-center">
            <Ionicons name="location" color={'white'} size={16} />
            <Typo className="mx-2 text-white">
              {booking.property.name}, {booking.property.city}, {booking.property.country}
            </Typo>
          </View>
          <View className="mt-2 flex flex-row justify-between">
            <View className="">
              <Typo variant="body" className="text-white">
                Check-in
              </Typo>
              <Typo variant="body" className="text-white">
                {format(new Date(booking.check_in), 'MMM dd, yyyy')}
              </Typo>
            </View>
            <View className="">
              <Typo variant="body" className="text-white">
                Check-out
              </Typo>
              <Typo variant="body" className="text-white">
                {format(new Date(booking.check_out), 'MMM dd, yyyy')}
              </Typo>
            </View>
          </View>
        </SquircleView>
      </SquircleView>
    </View>
  );
};

export default BookingItem;

const styles = StyleSheet.create({});
