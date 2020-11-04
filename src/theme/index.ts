import { createBox, createText, createTheme } from "@shopify/restyle";

const palette = {
  transparentBlack: "rgba(12, 13, 52, 0.7)",
  black: "#0C0D34",

  background: "#FFF",

  transparentGrey: "rgba(12, 13, 53, 0.05)",
  grey: "#F4F0EF",

  secondary: "#64B4BE",
  primary: "#2CB9B0",
};

const theme = createTheme({
  colors: {
    text: palette.black,
    transparentText: palette.transparentBlack,
    grey: palette.grey,
    transparentGrey: palette.transparentGrey,
    white: palette.background,
    primary: palette.primary,
    secondary: palette.secondary,
  },
  textVariants: {
    hero: {
      fontFamily: "SFPro Bold",
      fontWeight: "bold",
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      textAlign: "center",
    },
    title: {
      fontFamily: "SFPro SemiBold",
      fontWeight: "600",
      fontSize: 28,
      color: "text",
    },
    subTitle: {
      fontFamily: "SFPro SemiBold",
      fontSize: 24,
      lineHeight: 30,
      color: "text",
    },
    body: {
      fontFamily: "SFPro Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "transparentText",
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
});

export type Theme = typeof theme;

// helper components
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
