import { StyleSheet, View } from 'react-native';
import React from 'react';
import Container from '~/components/Container';
import Header from '~/components/Header';
import ImageWithSquircle from '~/components/ImageWithSquircle';
import Typo from '~/components/Text';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '~/core/theme/colors';
import { SquircleView } from 'expo-squircle-view';

const user: User = {
  avatar: 'https://cdn.pixabay.com/photo/2024/07/24/11/50/ai-generated-8917886_1280.jpg',
  bookings: [],
  created_at: '',
  email: 'songoku@dbz.com',
  id: '',
  name: 'Goku',
  properties: [],
  username: 'goku_dbz',
};

const ProfileScreen = () => {
  return (
    <Container>
      <Header
        title="Profile"
        headerAction={{
          name: 'log-out-outline',
          onPress: () => {},
        }}
      />

      <View className="flex flex-row items-center justify-center">
        <ImageWithSquircle image={user.avatar} width={256} height={256} borderRadius={48} />
      </View>

      <View className="mt-4  flex items-center">
        <Typo className="text-center" variant="title">
          {user.email}
        </Typo>
        <Typo className="text-center" variant="subtitle">
          @{user.username}
        </Typo>
      </View>

      <SquircleView
        preserveSmoothing
        cornerSmoothing={100}
        className="m-4 mt-10 flex flex-row flex-wrap justify-around">
        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="stats-chart" color={COLORS.primary} size={40} />
          </View>
          <View className="mt-4 flex flex-row items-center justify-center gap-4">
            <Typo className="text-center">Trips</Typo>
            <Typo className="text-center">4</Typo>
          </View>
        </View>

        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="heart" color={COLORS.primary} size={40} />
          </View>
          <View className="mt-4 flex flex-row items-center justify-center gap-4">
            <Typo className="text-center">Favorites</Typo>
            <Typo className="text-center">10</Typo>
          </View>
        </View>

        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="albums" color={COLORS.primary} size={40} />
          </View>
          <View className="mt-4 flex flex-row items-center justify-center gap-4">
            <Typo className="text-center">Albums</Typo>
            <Typo className="text-center">7</Typo>
          </View>
        </View>
      </SquircleView>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
