import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Typo from '~/components/Text';
import { BOOKINGS } from '~/core/constants/data';
import BookingItem from '~/components/bookings/BookingItem';

const BookingsScreen = () => {
  return (
    <Container>
      <Header title="Bookings" />

      <FlatList
        className="h-full"
        showsVerticalScrollIndicator={false}
        data={BOOKINGS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookingItem booking={item} />}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </Container>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({});
