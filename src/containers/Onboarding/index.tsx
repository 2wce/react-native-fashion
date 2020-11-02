import * as React from "react";
import {
  Container,
  Slider,
  Footer,
  Overlay,
  PaginationContainer,
  SubSlideContainer,
} from "./styles";
import { Dot, Slide, SubSlide } from "../../components";
import { Dimensions, StyleSheet, Animated, ScrollView } from "react-native";
const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    subTitle: "Find Your Outfits",
    image: require("../../../assets/1.png"),
  },
  {
    title: "Playful",
    color: "#BEECC4",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    subTitle: "Hear it First. Wear it First",
    image: require("../../../assets/2.png"),
  },
  {
    title: "Eccentric",
    color: "#FFE4D9",
    description:
      "Create your individual & unique style and look amazing everyday",
    subTitle: "Your Style, Your Way",
    image: require("../../../assets/3.png"),
  },
  {
    title: "Funky",
    color: "#FFDDDD",
    description:
      "Discover the latest trends in fashion and explore your personality",
    subTitle: "Look Good, Feel Good",
    image: require("../../../assets/4.png"),
  },
];

export default function Onboarding() {
  const x = React.useRef(new Animated.Value(0)).current;

  const backgroundColor = x.interpolate({
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const scrollRef = React.useRef<ScrollView>(null);

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          scrollToOverflowEnabled={true}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x } } }],
            {
              useNativeDriver: false,
            }
          )}
        >
          {slides.map(({ title, image }, index) => (
            <Slide
              key={index}
              label={title}
              image={image}
              right={!!(index % 2)}
            />
          ))}
        </Animated.ScrollView>
      </Slider>

      <Footer>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Overlay>
          <PaginationContainer
            style={{
              ...StyleSheet.absoluteFillObject,
            }}
          >
            {slides.map((_, index) => (
              <Dot
                key={index}
                index={index}
                currentIndex={Animated.divide(x, width)}
              />
            ))}
          </PaginationContainer>
          <SubSlideContainer
            style={{
              transform: [{ translateX: Animated.multiply(x, -1) }],
              width: width * slides.length,
            }}
          >
            {slides.map(({ subTitle, description }, index) => (
              <SubSlide
                key={index}
                onPress={() => {
                  if (scrollRef.current && index !== slides.length - 1) {
                    scrollRef.current.scrollTo({
                      x: (index + 1) * width,
                      animated: true,
                    });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subTitle, description }}
              />
            ))}
          </SubSlideContainer>
        </Overlay>
      </Footer>
    </Container>
  );
}
