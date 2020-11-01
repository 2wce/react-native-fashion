// NB! If you make changes to this file, remember to update styled.d.ts with your changes.
const theme = {
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 64],
  // Spacing scale taken from @chakra-ui - https://chakra-ui.com/theme
  space: [
    "0",
    "4px",
    "8px",
    "12px",
    "16px",
    "20px",
    "24px",
    "32px",
    "40px",
    "48px",
    "64px",
  ],
  fontFamily: {
    normal: "Rubik_400Regular",
    bold: "Rubik_700Bold",
    lighter: "Rubik_300Light",
  },
  navBarHeight: 48,
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  colors: {
    text: "#0A0A0A",
    background: "#FFF",
    grey: "#D8D8D8",
    secondary: "#64B4BE",
    primary: "#004080",
    facebook: "#507CC0",
    google: "#FF5E57",
    border: "#E7E7E7",
    underline: "#E4E5E5",
    checkbox: "#CCCCCC",
    muted: "#E4E5E5",
    success: "#7DBE31",
    error: "#C4001E",
    transparentWhite: "rgba(255,255,255,0.6)",
    transparentBlack: "rgba(0,0,0,0.6)",
    transparentGrey: "rgba(51,50,56,0.52)",
    black: "#000",
    textNormal: "#28292E",
    textTitle: "#9EA0A5",
    warningText: "#E6492D",
    flag: {
      success: "#64B4BE",
      successBackground: "#CAF1F6",
      warning: "#F5A623",
      warningBackground: "#FFF1DB",
      active: "#34AA44",
      activeBackground: "#A4FFB0",
      pendingBackground: "#FBE4BE",
    },
    warning: "#F5A623",
    outline: "#D3D3D3",
    successToast: "#34AA44",
    errorToast: "#FC0021",
    modes: {
      dark: {
        text: "#FFF",
        background: "#0A0A0A",
        primary: "#004B8C",
        secondary: "#595959",
        border: "#212121",
        muted: "#1c1c1c",
        success: "#7DBE31",
        error: "#C4001E",
        transparentWhite: "rgba(255,255,255,0.6)",
        transparentBlack: "rgba(0,0,0,0.6)",
        textNormal: "#28292E",
        warning: "#F5A623",
        outline: "#D3D3D3",
        successToast: "#34AA44",
        errorToast: "#FC0021",
      },
    },
  },
};

const modes = Object.keys(theme.colors.modes).map((key) => key);

modes.unshift("default");

export type Theme = typeof theme;

export { theme, modes };
