import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Button component types
export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// IconButton component types
export interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  iconColor?: string;
}

// Card component types
export interface CardProps extends Omit<TouchableOpacityProps, "style"> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "filled";
  padding?: "none" | "small" | "medium" | "large";
  borderRadius?: "small" | "medium" | "large";
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}
