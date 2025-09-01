import { router } from 'expo-router';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Container from '~/components/Container';
import Card from '~/components/home/Card';
import Discovery from '~/components/home/Discovery';
import MainHeader from '~/components/home/MainHeader';
import { PROPERTIES } from '~/core/constants/data';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/welcome');
    }, 2500);
  }, []);

  return (
    <Container>
      <MainHeader />

      <FlatList
        keyExtractor={(item) => item.id}
        data={PROPERTIES}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Discovery properties={PROPERTIES} />}
        renderItem={({ item }) => {
          return <Card property={item} />;
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({});
