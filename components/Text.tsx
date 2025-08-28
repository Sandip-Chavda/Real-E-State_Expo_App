import { StyleSheet, Text, TextProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import React from 'react';

type TypographyVariant =
  | 'title'
  | 'subtitle'
  | 'subtitle-primary'
  | 'body'
  | 'body-primary'
  | 'caption'
  | 'caption-primary'
  | 'button'
  | 'display';

interface TypoProps extends TextProps {
  className?: string;
  variant?: TypographyVariant;
}

const variantStyles: Record<TypographyVariant, string> = {
  title: 'text-2xl font-bold',
  subtitle: 'text-xl font-semibold',
  'subtitle-primary': 'text-xl font-semibold text-primary',
  body: 'text-base',
  'body-primary': 'text-base text-primary',
  caption: 'text-sm font-medium',
  'caption-primary': 'text-sm text-primary font-medium',
  button: 'text-xl font-semibold text-white text-center',
  display: 'text-3xl font-bold',
};

const Typo = ({ className, variant = 'body', children, ...props }: TypoProps) => {
  const textStyle = twMerge('text-black', variantStyles[variant], className);

  return (
    <Text {...props} className={textStyle}>
      {children}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});
