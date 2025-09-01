import { Image, ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SquircleButton } from 'expo-squircle-view';
import { StyleSheet, View } from 'react-native';
import Typo from '~/components/Text';
import { COLORS } from '~/core/theme/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('assets/Welcome.jpg')}
      style={StyleSheet.absoluteFill}
      contentFit="cover"
      transition={500}>
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,0.001)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}
        style={StyleSheet.absoluteFill}
      />

      <View className="flex-1 justify-end px-4">
        <Image
          source={require('assets/Holidia.png')}
          contentFit="contain"
          style={{ height: 40, width: 176, alignSelf: 'center', marginBottom: 30 }}
        />

        <SquircleButton
          className=""
          preserveSmoothing
          borderRadius={16}
          cornerSmoothing={100}
          backgroundColor={COLORS.primary}
          style={{ paddingVertical: 16 }}
          onPress={() => router.push('/signup')}>
          <Typo className="text-center" variant="button">
            Create Free Account
          </Typo>
        </SquircleButton>

        <SquircleButton
          className="mb-6 mt-2"
          preserveSmoothing
          borderRadius={16}
          cornerSmoothing={100}
          //   backgroundColor={COLORS.primary}
          style={{ paddingVertical: 16 }}
          onPress={() => router.push('/login')}>
          <Typo className="text-center text-white" variant="button">
            Already have an account? Login
          </Typo>
        </SquircleButton>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
