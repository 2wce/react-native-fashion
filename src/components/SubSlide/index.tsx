import * as React from "react";
import Button from "../Button";
import { Container, Description, SubTitle } from "./styles";

export interface SubSlideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

export default function SubSlide({
  subTitle,
  description,
  last,
  onPress,
}: SubSlideProps) {
  return (
    <Container>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      <Button
        onPress={onPress}
        title={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </Container>
  );
}
