import * as React from "react";
import { Container, Slider, Footer, Overlay } from "./styles";
import { Slide, SubSlide } from "../../components";
import { Dimensions, StyleSheet, Animated } from "react-native";
import Reanimated from "react-native-reanimated";
//import {onS} from 'react-native-redash'
const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    subTitle: "Find Your Outfits",
  },
  {
    title: "Playful",
    color: "#BEECC4",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    subTitle: "Hear it First. Wear it First",
  },
  {
    title: "Eccentric",
    color: "#FFE4D9",
    description:
      "Create your individual & unique style and look amazing everyday",
    subTitle: "Your Style, Your Way",
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    description:
      "Discover the latest trends in fashion and explore your personality",
    subTitle: "Look Good, Feel Good",
  },
];

export default function Onboarding() {
  const x = React.useRef(new Animated.Value(0)).current;

  const backgroundColor = x.interpolate({
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const scrollRef = React.useRef<Reanimated.ScrollView>(null);

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Reanimated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x } } }],
            {
              useNativeDriver: true,
            }
          )}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} label={title} right={!!(index % 2)} />
          ))}
        </Reanimated.ScrollView>
      </Slider>

      <Footer>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Overlay
          style={{
            width: width * slides.length,
            transform: [{ translateX: Animated.multiply(x, -1) }],
          }}
        >
          {slides.map(({ subTitle, description }, index) => (
            <SubSlide
              key={index}
              onPress={() => {
                if (scrollRef.current) {
                  //console.log(scrollRef.current.scrollTo);
                  scrollRef.current.getNode().scrollTo({
                    x: width * index + 1,
                    animated: true,
                  });
                }
              }}
              last={index === slides.length - 1}
              {...{ subTitle, description }}
            />
          ))}
        </Overlay>
      </Footer>
    </Container>
  );
}
