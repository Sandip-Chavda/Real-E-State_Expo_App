import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '~/core/theme/colors';

const MainHeader = () => {
  return (
    <View className="px-4 pb-4">
      <View className="flex flex-row items-center justify-between">
        <Image
          source={require('../../assets/Holidia.png')}
          style={{ width: 88, height: 20 }}
          contentFit="contain"
        />
        <Ionicons name="sparkles" size={24} color={COLORS.primary} />
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({});
