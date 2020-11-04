import * as React from "react";
import {
  Container,
  Slider,
  Footer,
  Overlay,
  PaginationContainer,
  SubSlideContainer,
  Underlay,
  StyledImage,
} from "./styles";
import { Dot, Slide, SubSlide } from "../../components";
import { Dimensions, StyleSheet, Animated, ScrollView } from "react-native";
import { slides } from "./data";
import theme from "../../theme";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";

const { width } = Dimensions.get("window");
const {
  borderRadii: { xl },
} = theme;

type OnBoardingNavProps = StackNavigationProp<RootStackParamList, "OnBoarding">;

type OnBoardingProps = {
  navigation: OnBoardingNavProps;
};

const Onboarding: React.FC<OnBoardingProps> = ({ navigation }) => {
  const x = React.useRef(new Animated.Value(0)).current;

  const backgroundColor = x.interpolate({
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const scrollRef = React.useRef<ScrollView>(null);

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        {slides.map(({ image }, index) => {
          const opacity = x.interpolate({
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          });

          return (
            <Underlay
              style={{ ...StyleSheet.absoluteFillObject, opacity }}
              key={index}
            >
              <StyledImage
                source={image.src}
                style={{
                  width: width - xl,
                  height: ((width - xl) * image.height) / image.width,
                }}
              />
            </Underlay>
          );
        })}
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
          {slides.map(({ title }, index) => (
            <Slide key={index} label={title} right={!!(index % 2)} />
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
            {slides.map(({ subTitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    }

                    if (scrollRef.current && !last) {
                      scrollRef.current.scrollTo({
                        x: (index + 1) * width,
                        animated: true,
                      });
                    }
                  }}
                  {...{ subTitle, description, last }}
                />
              );
            })}
          </SubSlideContainer>
        </Overlay>
      </Footer>
    </Container>
  );
};

export default Onboarding;
