import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

interface SafeScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  topInset?: boolean;
  bottomInset?: boolean;
  leftInset?: boolean;
  rightInset?: boolean;
}

const SafeScreen: React.FC<SafeScreenProps> = ({
  children,
  style,
  backgroundColor = Colors.light.background,
  topInset = true,
  bottomInset = true,
  leftInset = false,
  rightInset = false,
}) => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle: ViewStyle = {
    paddingTop: topInset ? insets.top : 0,
    paddingBottom: bottomInset ? insets.bottom : 0,
    paddingLeft: leftInset ? insets.left : 0,
    paddingRight: rightInset ? insets.right : 0,
    backgroundColor,
  };

  return (
    <View style={[styles.container, safeAreaStyle, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeScreen;
