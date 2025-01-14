import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RouteStackParamList = {
  Home: undefined;
  Details: {id: string};
};

export type RoutePropsNavigation<T extends keyof RouteStackParamList> =
  NativeStackScreenProps<RouteStackParamList, T>;

export type NavigationProps<T extends keyof RouteStackParamList> =
  NativeStackNavigationProp<RouteStackParamList, T>;
