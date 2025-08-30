import { SquircleButton, SquircleView } from 'expo-squircle-view';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import ImageWithSquircle from '../ImageWithSquircle';
import { BlurView } from 'expo-blur';
import Typo from '../Text';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type DiscoveryProps = {
  properties: Property[];
};

const Discovery = ({ properties }: DiscoveryProps) => {
  return (
    <>
      <SquircleButton
        className="mx-4 mb-4 flex flex-row items-center"
        backgroundColor="#f5f5f5"
        borderRadius={16}
        cornerSmoothing={100}
        preserveSmoothing
        style={{
          paddingVertical: 16,
          paddingHorizontal: 24,
        }}
        onPress={() => {
          router.navigate('/search');
        }}>
        <Ionicons name="search" size={24} color={'gray'} />
        <View className="mx-4 ">
          <Typo className="text-gray-400">Where to?</Typo>
        </View>
      </SquircleButton>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SquircleView className="mx-2">
            <ImageWithSquircle image={item.images[1]} height={224} width={196} />
            <SquircleView
              cornerSmoothing={100}
              preserveSmoothing
              borderRadius={24}
              style={{ position: 'absolute', bottom: 16, left: 24, right: 24, overflow: 'hidden' }}>
              <BlurView intensity={60} tint="dark">
                <Pressable className="flex flex-row items-center justify-between p-4">
                  <View>
                    <Typo numberOfLines={1} variant="caption" className="text-white">
                      {item.name}
                    </Typo>
                    <Typo variant="caption" className="text-white">
                      from ${item.price_per_night}
                    </Typo>
                  </View>
                  <Ionicons name="chevron-forward" color={'white'} size={18} />
                </Pressable>
              </BlurView>
            </SquircleView>
          </SquircleView>
        )}
      />
    </>
  );
};

export default Discovery;

const styles = StyleSheet.create({});
