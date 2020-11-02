import { Dimensions, View, Animated } from "react-native";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("window");

export const SLIDER_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = "75px";

export const Container = styled(View)`
  flex: 1;
  background-color: white;
`;

export const Slider = styled(Animated.View)`
  height: ${SLIDER_HEIGHT}px;
  border-bottom-right-radius: ${BORDER_RADIUS};
`;

export const Footer = styled(View)`
  flex: 1;
`;

export const Overlay = styled(View)`
  flex: 1;
  background-color: white;
  border-top-left-radius: ${BORDER_RADIUS};
`;

export const PaginationContainer = styled(View)`
  height: ${BORDER_RADIUS};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubSlideContainer = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
`;
