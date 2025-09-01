import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SquircleButton } from 'expo-squircle-view';
import { COLORS } from '~/core/theme/colors';
import Typo from '~/components/Text';
import { Image } from 'expo-image';
import Header from '~/components/Header';
import Container from '~/components/Container';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Header title="Login" />

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
          Welcome Back
        </Typo>

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
          Don&apos;t have an account?{' '}
          <Typo
            onPress={() => router.push('/signup')}
            variant="body-primary"
            className="text-lg font-medium">
            Sign Up
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
            Login
          </Typo>
        </SquircleButton>
      </View>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
