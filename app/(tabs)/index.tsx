import { Stack } from 'expo-router';

import { StyleSheet, Text, View } from 'react-native';
import Container from '~/components/Container';
import Image from '~/components/Image';
import Typo from '~/components/Text';

export default function Home() {
  return (
    <Container>
      <Typo variant="title">Title</Typo>

      <Image source="https://images.pexels.com/photos/31002073/pexels-photo-31002073.jpeg" />
    </Container>
  );
}

const styles = StyleSheet.create({});
