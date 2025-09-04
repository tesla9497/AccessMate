import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton } from "./ui";
import { HeaderProps } from "@/types";
import Colors from "@/constants/Colors";

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  onBackPress,
  showHelpButton = true,
  showProfileImage = true,
}) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
      <View style={styles.headerLeft}>
        {showBackButton && (
          <IconButton
            icon="arrow-back"
            onPress={handleBackPress}
            variant="ghost"
            size="medium"
            style={styles.backButton}
          />
        )}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View style={styles.headerRight}>
        {showHelpButton && (
          <IconButton
            icon="help-circle"
            onPress={() => {}}
            variant="ghost"
            size="medium"
            style={styles.helpButton}
          />
        )}
        {showProfileImage && (
          <IconButton
            icon="person"
            onPress={() => {}}
            variant="ghost"
            size="small"
            style={styles.profileImage}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: Colors.light.background,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  helpButton: {
    // IconButton handles its own styling
  },
  profileImage: {
    backgroundColor: Colors.light.backgroundTertiary,
  },
});

export default Header;
