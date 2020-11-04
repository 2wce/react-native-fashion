import { ParamListBase, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  OnBoarding: undefined;
  Welcome: undefined;
  Root: undefined;
  NotFound: undefined;
};

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProps<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
