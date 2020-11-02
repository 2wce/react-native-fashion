import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { SLIDER_HEIGHT } from "../../containers/Onboarding/styles";
import {
  Container,
  StyledImage,
  Title,
  TitleContainer,
  Underlay,
} from "./styles";

export interface SlideProps {
  label: string;
  right?: boolean;
  image: any;
}

const { width } = Dimensions.get("window");

export default function Slide({ label, right, image }: SlideProps) {
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
      <Underlay style={{ ...StyleSheet.absoluteFillObject }}>
        <StyledImage
          source={image}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
      </Underlay>
      <TitleContainer
        style={{
          transform,
        }}
      >
        <Title>{label}</Title>
      </TitleContainer>
    </Container>
  );
}
