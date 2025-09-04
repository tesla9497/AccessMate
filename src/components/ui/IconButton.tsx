import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButtonProps } from "@/types";
import Colors from "@/constants/Colors";

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  variant = "ghost",
  size = "medium",
  disabled = false,
  loading = false,
  style,
  iconColor,
}) => {
  const buttonStyle = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const getIconColor = () => {
    if (iconColor) return iconColor;
    if (disabled) return Colors.light.textMuted;

    switch (variant) {
      case "primary":
        return Colors.light.background;
      case "secondary":
        return Colors.light.background;
      case "outline":
        return Colors.light.primary;
      case "ghost":
      default:
        return Colors.light.primary;
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "small":
        return 16;
      case "medium":
        return 24;
      case "large":
        return 32;
      default:
        return 24;
    }
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={getIconColor()} size="small" />
      ) : (
        <Ionicons name={icon} size={getIconSize()} color={getIconColor()} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  // Variants
  primary: {
    backgroundColor: Colors.light.primary,
  },
  secondary: {
    backgroundColor: Colors.light.textMuted,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },
  ghost: {
    backgroundColor: "transparent",
  },

  // Sizes
  small: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  medium: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  large: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  // Disabled state
  disabled: {
    opacity: 0.5,
  },
});

export default IconButton;
