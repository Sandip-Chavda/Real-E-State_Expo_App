import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SquircleButton } from 'expo-squircle-view';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Typo from '~/components/Text';
import { COLORS } from '~/core/theme/colors';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Header title="Sign Up" />

      <View className="flex-1 p-4">
        <View className="mt-24 flex flex-row items-center justify-center">
          <Image
            source={require('assets/Holidia.png')}
            style={{ height: 40, width: 176 }}
            contentFit="contain"
            transition={2000}
          />
        </View>
        <Typo variant="subtitle-primary" className="mt-4 text-center">
          Let&apos;s get started
        </Typo>

        <TextInput
          autoCapitalize="words"
          placeholder="👤 Enter your name"
          className="mt-10 rounded-xl bg-gray-100 px-4 py-6"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="📧 Enter your e-mail address"
          className="mt-6 rounded-xl bg-gray-100 px-4 py-6"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="🔐 Enter password"
          className="mt-6 rounded-xl bg-gray-100 px-4 py-6"
          value={password}
          onChangeText={setPassword}
        />

        {/* <Typo className="mt-4 text-center">
          Already have an account?{' '}
          <Typo
            onPress={() => router.push('/login')}
            variant="body-primary"
            className="text-lg font-medium">
            Login
          </Typo>
        </Typo> */}

        <SquircleButton
          className="mt-auto"
          preserveSmoothing
          borderRadius={16}
          cornerSmoothing={100}
          backgroundColor={COLORS.primary}
          style={{ paddingVertical: 16 }}>
          <Typo className="text-center" variant="button">
            Create Account
          </Typo>
        </SquircleButton>
      </View>
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
