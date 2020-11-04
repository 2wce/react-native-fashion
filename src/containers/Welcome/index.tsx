import * as React from "react";
import { Dimensions, Image } from "react-native";
import { Button } from "../../components";
import theme, { Box, Text } from "../../theme";

interface WelcomeProps {}

const { width } = Dimensions.get("screen");

const {
  borderRadii: { xl },
} = theme;

const image = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

export default function Welcome(props: WelcomeProps) {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={image.src}
          style={{
            width: width - xl,
            height: ((width - xl) * image.height) / image.width,
          }}
        />
      </Box>
      <Box borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
      </Box>
      <Box
        backgroundColor="white"
        borderTopLeftRadius="xl"
        justifyContent="space-evenly"
        alignItems="center"
        flex={1}
        padding="xl"
      >
        <Text variant="subTitle">Let's get started</Text>
        <Text variant="body" textAlign="center" color="text">
          Login to your account below or signup for an amazing experience
        </Text>
        <Button
          variant="primary"
          title="Have an account? Login"
          onPress={() => null}
        />
        <Button title="Join us, it's Free" onPress={() => null} />
        <Button
          variant="transparent"
          title="Forgot Password"
          onPress={() => null}
        />
      </Box>
    </Box>
  );
}
