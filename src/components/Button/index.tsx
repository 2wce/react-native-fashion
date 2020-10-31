import * as React from "react";
import { Container, StyledButton, Title } from "./styles";

export interface ButtonProps {
  variant: "default" | "primary";
  title: string;
  onPress: () => void;
}

const Button = ({ variant, title, onPress }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress}>
      <Container variant={variant}>
        <Title variant={variant}>{title}</Title>
      </Container>
    </StyledButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
