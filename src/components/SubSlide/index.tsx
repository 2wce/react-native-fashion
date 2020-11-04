import * as React from "react";
import Button from "../Button";
import { Container, Description, SubTitle } from "./styles";
import { Text } from "../../theme";

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
      <SubTitle variant="subTitle">{subTitle}</SubTitle>
      <Description variant="body">{description}</Description>
      <Button
        onPress={onPress}
        title={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </Container>
  );
}
