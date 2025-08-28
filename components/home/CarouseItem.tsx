import { StyleSheet, View } from 'react-native';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { WIDTH } from '~/core/utils/layout';
import Image from '../Image';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useRef } from 'react';
import { COLORS } from '~/core/theme/colors';

type CarouselItemProps = {
  property: Property;
};

const CarouseItem = ({ property }: CarouselItemProps) => {
  const progressValue = useSharedValue<number>(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        index,
        animated: true,
      });
    }
  };

  return (
    <View>
      <Carousel
        autoPlay={false}
        ref={carouselRef}
        overscrollEnabled={false}
        scrollAnimationDuration={1500}
        width={WIDTH - 32}
        height={320}
        data={property.images}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
        }}
        renderItem={({ item: imageUri }) => {
          return (
            <View className="mx-1">
              <Image source={imageUri} />
            </View>
          );
        }}
      />
      <Animated.View className="absolute bottom-4 w-full ">
        <Pagination.Basic
          data={property.images.map((_property) => ({ color: _property }))}
          progress={progressValue}
          onPress={onPressPagination}
          containerStyle={{
            paddingVertical: 8,
          }}
          activeDotStyle={{
            width: 14,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 4,
            backgroundColor: COLORS.primary,
          }}
          dotStyle={{
            width: 16,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 4,
            backgroundColor: 'lightgray',
          }}
        />
      </Animated.View>
    </View>
  );
};

export default CarouseItem;

const styles = StyleSheet.create({});
