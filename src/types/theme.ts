import { Text as DefaultText, View as DefaultView } from "react-native";

// Theme-related types
export type ThemeProps = {
  lightColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
