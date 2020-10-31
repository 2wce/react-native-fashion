import { Dimensions, View, Text } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled(View)`
  flex: 1;
  width: ${width}px;
`;

export const Title = styled(Text)`
  font-size: 80px;
  font-family: System;
  color: white;
  text-align: center;
  line-height: 80px;
`;

export const TitleContainer = styled(View)`
  height: 100px;
  justify-content: center;
`;
