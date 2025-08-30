import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { SquircleButton } from 'expo-squircle-view';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Container from '~/components/Container';
import Header from '~/components/Header';
import AmenitiesList from '~/components/property/AmenitiesList';
import PropertyImage from '~/components/property/PropertyImage';
import Typo from '~/components/Text';
import { PROPERTIES } from '~/core/constants/data';
import { COLORS } from '~/core/theme/colors';

const PropertiesDetails = () => {
  const { id } = useLocalSearchParams();

  const property = PROPERTIES.find((_property) => _property.id === id) as Property;

  const [readMore, setReadMore] = useState(false);

  return (
    <Container>
      <Header title="Property Details" />

      <ScrollView className="bg-gray-100 p-4" showsVerticalScrollIndicator={false}>
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

      <View className="bottom-0 left-0 right-0 mx-4 mb-4 mt-auto flex flex-row items-center justify-center">
        <SquircleButton
          className="flex-grow"
          backgroundColor={COLORS.primary}
          borderRadius={16}
          style={{ paddingVertical: 16 }}>
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
