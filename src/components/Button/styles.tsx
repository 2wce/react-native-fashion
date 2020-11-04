import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import theme from "../../theme";

interface Props {
  variant: "default" | "primary" | "transparent";
}

const {
  colors: { grey, primary, text, white, transparentGrey },
} = theme;

export const Container = styled(View)<Props>`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  width: 245px;
  background-color: ${({ variant }) =>
    variant === "primary"
      ? primary
      : variant === "transparent"
      ? transparentGrey
      : grey};
`;

export const StyledButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  width: 245px;
`;

export const Title = styled(Text)<Props>`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.variant === "primary" ? white : text)};
`;
