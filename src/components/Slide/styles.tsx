import { Dimensions, View, Text, Image } from "react-native";
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

export const Underlay = styled(View)`
  justify-content: flex-end;
`;

export const StyledImage = styled(Image)`
  border-bottom-right-radius: 75px;
`;
