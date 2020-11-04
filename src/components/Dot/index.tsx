import * as React from "react";
import { Animated } from "react-native";
import { StyledDot } from "./styles";

export interface DotProps {
  index: number;
  currentIndex: Animated.AnimatedDivision;
}

export default function Dot({ index, currentIndex }: DotProps) {
  const opacity = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: "clamp",
  });

  const scale = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: "clamp",
  });

  return (
    <StyledDot
      style={{
        opacity,
        transform: [{ scale }],
      }}
    />
  );
}
