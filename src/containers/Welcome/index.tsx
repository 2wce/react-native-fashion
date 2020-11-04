import * as React from "react";
import { Box } from "../../theme";

export interface WelcomeProps {}

export default function Welcome(props: WelcomeProps) {
  return (
    <Box flex={1}>
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="sliderGrey"
      ></Box>
      <Box flex={1} borderBottomLeftRadius="xl"></Box>
    </Box>
  );
}
