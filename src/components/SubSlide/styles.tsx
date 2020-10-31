import { View, Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 44px;
`;

const StyledText = styled(Text)`
  font-family: System;
  color: #0c0d34;
  text-align: center;
`;

export const SubTitle = styled(StyledText)`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 12px;
`;

export const Description = styled(StyledText)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;
`;

export const TitleContainer = styled(View)`
  height: 100px;
  justify-content: center;
`;
