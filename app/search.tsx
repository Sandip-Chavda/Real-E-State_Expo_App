import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Card from '~/components/search/Card';
import Typo from '~/components/Text';
import { PROPERTIES } from '~/core/constants/data';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <Header title="Search" />

      <View className="mx-4 flex flex-row items-center justify-center rounded-xl bg-gray-100 px-4 py-2">
        <View className="flex flex-row items-center justify-center py-2">
          <Ionicons name="search" color={'gray'} size={20} />
          <TextInput
            placeholder="Search Places..."
            className="ml-2 flex-1"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={PROPERTIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card property={item} />}
      />
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
