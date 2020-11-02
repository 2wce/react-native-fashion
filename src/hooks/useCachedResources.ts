import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "SFPro Bold": require("../../assets/fonts/SFProDisplay-Bold.ttf"),
          "SFPro SemiBold": require("../../assets/fonts/SFProDisplay-Semibold.ttf"),
          "SFPro Regular": require("../../assets/fonts/SFProDisplay-Regular.ttf"),
          "SFPro Light": require("../../assets/fonts/SFProDisplay-Light.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
