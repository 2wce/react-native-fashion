import { Animated } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

export const StyledDot = styled(Animated.View)`
  background-color: ${theme.colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 4px;
`;
