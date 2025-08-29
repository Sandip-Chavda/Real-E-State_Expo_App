import { StyleSheet, View } from 'react-native';
import { ResponsiveGrid } from 'react-native-flexible-grid';
import Container from '~/components/Container';
import Card from '~/components/favorite/Card';
import Header from '~/components/Header';
import Image from '~/components/Image';
import { FAVORITES } from '~/core/constants/data';

const FavoriteScreen = () => {
  return (
    <Container>
      <Header title="Favorites" />
      <ResponsiveGrid
        maxItemsPerColumn={2}
        itemUnitHeight={256}
        data={FAVORITES as Property[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card property={item} />}
      />
    </Container>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
