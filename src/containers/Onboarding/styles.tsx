import { Dimensions, View, Animated, Image } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

const { height } = Dimensions.get("window");
const {
  borderRadii: { xl },
} = theme;

export const SLIDER_HEIGHT = 0.61 * height;

export const Container = styled(View)`
  flex: 1;
  background-color: white;
`;

export const Slider = styled(Animated.View)`
  height: ${SLIDER_HEIGHT}px;
  border-bottom-right-radius: ${xl}px;
`;

export const Footer = styled(View)`
  flex: 1;
`;

export const Overlay = styled(View)`
  flex: 1;
  background-color: white;
  border-top-left-radius: ${xl}px;
`;

export const PaginationContainer = styled(View)`
  height: ${xl}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubSlideContainer = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
`;

export const Underlay = styled(Animated.View)`
  justify-content: flex-end;
  align-items: center;
  border-bottom-right-radius: ${xl}px;
  overflow: hidden;
`;

export const StyledImage = styled(Image)``;
