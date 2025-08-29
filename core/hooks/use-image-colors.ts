import { useEffect, useMemo, useState } from 'react';
import { getColors, ImageColorsResult } from 'react-native-image-colors';
import { COLORS } from '../theme/colors';

export const useImageColors = (imageUrl: string) => {
  const [colors, setColors] = useState<ImageColorsResult>();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await getColors(imageUrl);
        setColors(response);
      } catch (error: any) {
        console.log('Error in fetch colors from image', error);
      }
    };

    fetchColors();
  }, [imageUrl]);

  const colorPalette = useMemo(() => {
    if (!colors) {
      return {
        primary: COLORS.primary,
        secondary: COLORS.primary,
        background: COLORS.primary,
      };
    }

    if ('platform' in colors) {
      if (colors.platform === 'ios') {
        return {
          primary: colors.primary,
          secondary: colors.secondary,
          background: colors.background,
        };
      }
      if (colors.platform === 'android') {
        return {
          primary: colors.dominant,
          secondary: colors.lightVibrant,
          background: colors.vibrant,
        };
      }
    }
  }, [colors]);

  return {
    colors: colorPalette,
  };
};
