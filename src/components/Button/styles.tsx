import { View } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
//import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface Props {
  variant: "default" | "primary";
}

export const Container = styled(View)<Props>`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  width: 245px;
  background-color: ${(props) =>
    props.variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)"};
`;

export const StyledButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  width: 245px;
`;

export const Title = styled.Text<Props>`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.variant === "primary" ? "white" : "#0c0d34")};
`;
