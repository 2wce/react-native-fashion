import * as React from "react";
import { Dimensions } from "react-native";
import { SLIDER_HEIGHT } from "../../containers/Onboarding/styles";
import { Container, Title, TitleContainer } from "./styles";
import { Text } from "../../theme";

export interface SlideProps {
  label: string;
  right?: boolean;
}

const { width } = Dimensions.get("window");

export default function Slide({ label, right }: SlideProps) {
  const transform = [
    {
      translateY: (SLIDER_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <Container>
      <TitleContainer
        style={{
          transform,
        }}
      >
        <Title variant="hero">{label}</Title>
      </TitleContainer>
    </Container>
  );
}
