import { View } from "react-native";
import styled from "styled-components/native";
import theme, { Text } from "../../theme";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 44px;
`;

const StyledText = styled(Text)`
  text-align: center;
`;

export const SubTitle = styled(StyledText)`
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Description = styled(StyledText)`
  font-weight: 400;
  margin-bottom: 40px;
  color: ${theme.colors.transparentText};
`;

export const TitleContainer = styled(View)`
  height: 100px;
  justify-content: center;
`;
