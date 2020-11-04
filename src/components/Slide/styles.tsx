import { Dimensions, View, Image } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../theme";

const { width } = Dimensions.get("window");

export const Container = styled(View)`
  flex: 1;
  width: ${width}px;
`;

export const Title = styled(Text)`
  color: white;
  text-align: center;
`;

export const TitleContainer = styled(View)`
  height: 100px;
  justify-content: center;
`;

export const Underlay = styled(View)`
  justify-content: flex-end;
  align-items: center;
`;

export const StyledImage = styled(Image)``;
