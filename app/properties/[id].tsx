import { Ionicons } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlashList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Calendar, useDateRange } from '@marceloterreiro/flash-calendar';
import { FlashList } from '@shopify/flash-list';
import { useLocalSearchParams } from 'expo-router';
import { SquircleButton } from 'expo-squircle-view';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Container from '~/components/Container';
import Header from '~/components/Header';
import AmenitiesList from '~/components/property/AmenitiesList';
import PropertyImage from '~/components/property/PropertyImage';
import Typo from '~/components/Text';
import { today } from '~/core/constants';
import { PROPERTIES } from '~/core/constants/data';
import { calendarTheme } from '~/core/theme/calendar-theme';
import { COLORS } from '~/core/theme/colors';

const safeFlashList = Platform.select({
  ios: FlashList,
  android: BottomSheetFlashList as any,
});

const PropertiesDetails = () => {
  const { id } = useLocalSearchParams();
  const [readMore, setReadMore] = useState(false);

  const { calendarActiveDateRanges, onCalendarDayPress } = useDateRange();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['60%'], []);
  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        // animatedIndex={props.animatedIndex}
        // animatedPosition={props.animatedPosition}
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={'close'}
      />
    );
  }, []);

  const property = PROPERTIES.find((_property) => _property.id === id) as Property;

  return (
    <Container>
      <Header title="Property Details" />

      <ScrollView className="flex-1 bg-gray-100 p-4" showsVerticalScrollIndicator={false}>
        <PropertyImage
          imageUrl={property?.images[1]}
          rating={4.9}
          isFavorite={property?.is_favorite}
        />

        <Typo className="mt-4" variant="subtitle-primary">
          {property.name}
        </Typo>

        <View className="flex flex-row items-center">
          <Ionicons name="location" size={16} color={COLORS.primary} />
          <Typo variant="body-primary" className="">
            {property.city}, {property.country}
          </Typo>
        </View>

        <Typo
          className="mt-1.5 text-gray-700"
          variant="body"
          numberOfLines={readMore ? undefined : 4}>
          {property.description}
        </Typo>
        {property.description.length > 100 && (
          <Pressable onPress={() => setReadMore(!readMore)} className="flex items-end">
            <Typo variant="body-primary">{readMore ? 'Read Less' : 'Read More'}</Typo>
          </Pressable>
        )}

        <AmenitiesList amenities={property.amenities} />
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        index={-1}
        enablePanDownToClose={true}
        enableDynamicSizing={false}>
        <BottomSheetView style={{ flex: 1 }}>
          <Typo className="text-center">Price</Typo>

          <BottomSheetView style={{ flex: 1 }}>
            <Calendar.List
              calendarActiveDateRanges={calendarActiveDateRanges}
              calendarMinDateId={today}
              CalendarScrollComponent={safeFlashList}
              onCalendarDayPress={onCalendarDayPress}
              // style={{ flex: 1 }}
              theme={calendarTheme}
            />
          </BottomSheetView>

          <SquircleButton
            backgroundColor={COLORS.primary}
            className="m-8 flex flex-row items-center justify-center px-4"
            style={{ paddingVertical: 16 }}
            borderRadius={24}
            cornerSmoothing={100}
            preserveSmoothing
            onPress={() => {
              bottomSheetRef.current?.close();
            }}>
            <Ionicons name="checkmark-circle" color={'white'} size={24} />
            <Typo variant="button" className="mx-2 text-center">
              Confirm
            </Typo>
          </SquircleButton>
        </BottomSheetView>
      </BottomSheet>

      <View className="bottom-0 left-0 right-0 -z-10 mx-4 mb-4 mt-auto flex flex-row items-center justify-center">
        <SquircleButton
          className="flex-grow"
          backgroundColor={COLORS.primary}
          borderRadius={16}
          style={{ paddingVertical: 16 }}
          onPress={() => bottomSheetRef.current?.expand()}>
          <Typo className="" variant="button">
            Book Now
          </Typo>
        </SquircleButton>
      </View>
    </Container>
  );
};

export default PropertiesDetails;

const styles = StyleSheet.create({});
