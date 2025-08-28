import { FlatList, StyleSheet, Text, View } from 'react-native';
import Container from '~/components/Container';
import Card from '~/components/home/Card';
import Image from '~/components/Image';
import Typo from '~/components/Text';
import { PROPERTIES } from '~/core/constants/data';

export default function Home() {
  return (
    <Container>
      <Typo variant="title">Home</Typo>

      <FlatList
        keyExtractor={(item) => item.id}
        data={PROPERTIES}
        renderItem={({ item }) => {
          return <Card property={item} />;
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({});
