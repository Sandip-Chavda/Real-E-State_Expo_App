import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typo from './Text';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { COLORS } from '~/core/theme/colors';

type HeaderProps = {
  title: string;
  headerAction?: {
    name: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
};

const Header = ({ title, headerAction }: HeaderProps) => {
  const onBackPress = () => {
    router.back();
  };

  return (
    <View className="mb-4 flex flex-row items-center justify-between px-2">
      <View className="flex flex-row items-center justify-center">
        <TouchableOpacity onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Typo variant="subtitle" className="mx-2 text-center">
          {title}
        </Typo>
      </View>
      {headerAction && (
        <TouchableOpacity onPress={headerAction.onPress}>
          <Ionicons name={headerAction.name} size={24} color={COLORS.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
