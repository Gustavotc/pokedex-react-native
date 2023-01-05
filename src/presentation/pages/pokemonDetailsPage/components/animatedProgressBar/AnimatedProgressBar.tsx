import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  maxValue: number;
  value: number;
  color: string;
};

const AnimatedProgressBar: React.FC<Props> = ({
  maxValue,
  value = 0,
  color,
}) => {
  const [width, setWidth] = useState(0);
  const animatedWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
    };
  });

  useEffect(() => {
    const newValue = (value * width) / maxValue;
    animatedWidth.value = withTiming(newValue, { duration: 1000 });
  }, [width]);

  return (
    <View
      style={{
        height: 10,
        borderRadius: 10,
        backgroundColor: '#f3f3f3',
        flex: 1,
      }}
      onLayout={e => {
        const containerWidth = e.nativeEvent.layout.width;
        setWidth(containerWidth);
      }}
    >
      <Animated.View
        style={[
          {
            height: 10,
            borderRadius: 10,
            backgroundColor: color,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};

export default AnimatedProgressBar;
