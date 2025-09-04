import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CardProps } from "@/types";
import Colors from "@/constants/Colors";

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "medium",
  borderRadius = "medium",
  style,
  onPress,
  disabled = false,
  ...touchableProps
}) => {
  const cardStyle = [
    styles.card,
    styles[variant],
    styles[
      `padding${
        padding.charAt(0).toUpperCase() + padding.slice(1)
      }` as keyof typeof styles
    ],
    styles[
      `radius${
        borderRadius.charAt(0).toUpperCase() + borderRadius.slice(1)
      }` as keyof typeof styles
    ],
    disabled && styles.disabled,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        {...touchableProps}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surface,
  },

  // Variants
  default: {
    backgroundColor: Colors.light.surface,
  },
  elevated: {
    backgroundColor: Colors.light.surfaceElevated,
    shadowColor: Colors.light.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  outlined: {
    backgroundColor: Colors.light.surfaceOutlined,
    borderWidth: 0.5,
    borderColor: Colors.light.border,
  },
  filled: {
    backgroundColor: Colors.light.surfaceFilled,
  },

  // Padding variants
  paddingNone: {
    padding: 0,
  },
  paddingSmall: {
    padding: 12,
  },
  paddingMedium: {
    padding: 16,
  },
  paddingLarge: {
    padding: 20,
  },

  // Border radius variants
  radiusSmall: {
    borderRadius: 8,
  },
  radiusMedium: {
    borderRadius: 12,
  },
  radiusLarge: {
    borderRadius: 16,
  },

  // Disabled state
  disabled: {
    opacity: 0.5,
  },
});

export default Card;
