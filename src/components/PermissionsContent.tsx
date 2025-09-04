import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AppState,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Card } from "./ui";
import { useCameraPermissions } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { Audio } from "expo-av";
import * as Contacts from "expo-contacts";
import * as Notifications from "expo-notifications";
import * as Calendar from "expo-calendar";
import { Permission, PermissionsContentProps } from "@/types";
import Colors from "@/constants/Colors";

const PermissionsContent = ({ navigation }: PermissionsContentProps) => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [appState, setAppState] = useState(AppState.currentState);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  const checkLocationPermission = async (): Promise<boolean> => {
    const { status } = await Location.getForegroundPermissionsAsync();
    return status === "granted";
  };

  const requestLocationPermission = async (): Promise<boolean> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === "granted";
  };

  const checkPhotosPermission = async (): Promise<boolean> => {
    const { status } = await MediaLibrary.getPermissionsAsync();
    return status === "granted";
  };

  const requestPhotosPermission = async (): Promise<boolean> => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status === "granted";
  };

  const checkMessagesPermission = async (): Promise<boolean> => {
    const { status } = await Contacts.getPermissionsAsync();
    return status === "granted";
  };

  const requestMessagesPermission = async (): Promise<boolean> => {
    const { status } = await Contacts.requestPermissionsAsync();
    return status === "granted";
  };

  const checkMicrophonePermission = async (): Promise<boolean> => {
    const { status } = await Audio.getPermissionsAsync();
    return status === "granted";
  };

  const requestMicrophonePermission = async (): Promise<boolean> => {
    const { status } = await Audio.requestPermissionsAsync();
    return status === "granted";
  };

  const checkNotificationPermission = async (): Promise<boolean> => {
    const { status } = await Notifications.getPermissionsAsync();
    return status === "granted";
  };

  const requestNotificationPermission = async (): Promise<boolean> => {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === "granted";
  };

  const checkCalendarPermission = async (): Promise<boolean> => {
    const { status } = await Calendar.getCalendarPermissionsAsync();
    return status === "granted";
  };

  const requestCalendarPermission = async (): Promise<boolean> => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    return status === "granted";
  };

  const initializePermissions = () => {
    const permissionList: Permission[] = [
      {
        id: "camera",
        title: "Camera",
        description:
          "To take photos of properties and save them to your device",
        icon: "camera",
        granted: cameraPermission?.granted || false,
        requestPermission: async () => {
          const result = await requestCameraPermission();
          return result.granted;
        },
      },
      {
        id: "microphone",
        title: "Microphone",
        description: "To record voice notes during property tours and viewings",
        icon: "mic",
        granted: false,
        requestPermission: requestMicrophonePermission,
      },
      {
        id: "photos",
        title: "Photos",
        description:
          "To access property photos and documents saved in your phone's gallery",
        icon: "images",
        granted: false,
        requestPermission: requestPhotosPermission,
      },
      {
        id: "messages",
        title: "Contacts",
        description:
          "To contact agents, property managers, and save important contacts",
        icon: "people",
        granted: false,
        requestPermission: requestMessagesPermission,
      },
      {
        id: "location",
        title: "Location",
        description: "To find nearby properties and get directions to viewings",
        icon: "location",
        granted: false,
        requestPermission: requestLocationPermission,
      },
      {
        id: "notifications",
        title: "Notifications",
        description:
          "To alert you about new listings, price changes, and availability updates",
        icon: "notifications",
        granted: false,
        requestPermission: requestNotificationPermission,
      },
      {
        id: "calendar",
        title: "Calendar",
        description:
          "To schedule property viewings and set reminders for open houses",
        icon: "calendar",
        granted: false,
        requestPermission: requestCalendarPermission,
      },
    ];

    setPermissions(permissionList);
  };

  const checkAllPermissions = async () => {
    const updatedPermissions = await Promise.all(
      permissions.map(async (permission) => {
        let isGranted = false;
        switch (permission.id) {
          case "camera":
            isGranted = cameraPermission?.granted || false;
            break;
          case "microphone":
            isGranted = await checkMicrophonePermission();
            break;
          case "photos":
            isGranted = await checkPhotosPermission();
            break;
          case "messages":
            isGranted = await checkMessagesPermission();
            break;
          case "location":
            isGranted = await checkLocationPermission();
            break;
          case "notifications":
            isGranted = await checkNotificationPermission();
            break;
          case "calendar":
            isGranted = await checkCalendarPermission();
            break;
        }
        return { ...permission, granted: isGranted };
      })
    );
    setPermissions(updatedPermissions);
  };

  const handlePermissionPress = async (permission: Permission) => {
    try {
      const granted = await permission.requestPermission();
      const updatedPermissions = permissions.map((p) =>
        p.id === permission.id ? { ...p, granted } : p
      );
      setPermissions(updatedPermissions);

      if (granted) {
        Alert.alert("Success", `${permission.title} permission granted!`);
      } else {
        Alert.alert(
          "Permission Denied",
          `${permission.title} permission was denied. You can enable it later in Settings.`
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to request permission");
    }
  };

  useEffect(() => {
    initializePermissions();
  }, [cameraPermission]);

  useEffect(() => {
    if (permissions.length > 0) {
      checkAllPermissions();
    }
  }, [permissions.length, cameraPermission]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: any) => {
      if (appState.match(/inactive|background/) && nextAppState === "active") {
        // App has come to the foreground, check permissions again
        checkAllPermissions();
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    return () => subscription?.remove();
  }, [appState, permissions.length]);

  const getStatusIcon = (granted: boolean) => {
    return granted ? "checkmark-circle" : "close-circle";
  };

  const getStatusColor = (granted: boolean) => {
    return granted ? Colors.light.success : Colors.light.error;
  };

  // Check if all permissions are granted
  const areAllPermissionsGranted = () => {
    return (
      permissions.length > 0 &&
      permissions.every((permission) => permission.granted)
    );
  };

  // Handle continue button press
  const handleContinue = () => {
    if (areAllPermissionsGranted()) {
      if (navigation) {
        navigation.navigate("Email");
      }
    } else {
      Alert.alert(
        "Permissions Required",
        "Please grant all permissions to continue. This ensures the app works properly for automatic receipt capture and mileage tracking."
      );
    }
  };

  const renderPermissionItem = ({
    item,
    index,
  }: {
    item: Permission;
    index: number;
  }) => (
    <TouchableOpacity
      style={[
        styles.permissionItem,
        index === permissions.length - 1 && styles.lastPermissionItem,
      ]}
      onPress={() => handlePermissionPress(item)}
    >
      <View style={styles.permissionLeft}>
        <View style={styles.permissionIconContainer}>
          <Ionicons
            name={item.icon as any}
            size={24}
            color={Colors.light.primary}
          />
        </View>
        <View style={styles.permissionTextContainer}>
          <Text style={styles.permissionTitle}>{item.title}</Text>
          <Text style={styles.permissionDescription}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.permissionRight}>
        <Ionicons
          name={getStatusIcon(item.granted)}
          size={24}
          color={getStatusColor(item.granted)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Enable access to automate receipt capture and mileage tracking. No
          manual uploads.
        </Text>

        {/* Permissions List */}
        <Card
          variant="outlined"
          padding="large"
          borderRadius="large"
          style={styles.permissionsCard}
        >
          <FlatList
            data={permissions}
            renderItem={renderPermissionItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            bounces={false}
            nestedScrollEnabled={true}
          />
        </Card>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        {/* Bottom Info */}
        <Ionicons
          name={
            areAllPermissionsGranted()
              ? "checkmark-circle"
              : "lock-closed-outline"
          }
          size={16}
          color={
            areAllPermissionsGranted()
              ? Colors.light.success
              : Colors.light.primary
          }
          style={styles.privacyIcon}
        />
        <View style={styles.bottomInfo}>
          <Text style={styles.bottomText}>
            {areAllPermissionsGranted()
              ? "All permissions granted! You can now continue to set up your email integration."
              : "You'll now see system permission popups. Please allow access to keep things automatic and organized from day one."}
          </Text>
        </View>
        <Button
          title={
            areAllPermissionsGranted()
              ? "Continue to Email"
              : "Grant All Permissions"
          }
          onPress={handleContinue}
          variant={areAllPermissionsGranted() ? "primary" : "secondary"}
          size="large"
          disabled={!areAllPermissionsGranted()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.backgroundSecondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  description: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 20,
    marginBottom: 24,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressText: {
    fontSize: 12,
    color: Colors.light.textTertiary,
    marginBottom: 8,
    textAlign: "center",
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.light.borderLight,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: Colors.light.primary,
    borderRadius: 2,
  },
  permissionsCard: {
    flex: 1,
    marginBottom: 24,
  },
  permissionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.borderLight,
  },
  lastPermissionItem: {
    borderBottomWidth: 0,
  },
  permissionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  permissionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.light.backgroundTertiary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  permissionTextContainer: {
    flex: 1,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
    marginBottom: 4,
  },
  permissionDescription: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 20,
  },
  permissionRight: {
    alignItems: "center",
    marginLeft: 16,
  },
  bottomInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  bottomText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    lineHeight: 16,
    marginLeft: 8,
    flex: 1,
    textAlign: "center",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  privacyIcon: {
    alignSelf: "center",
    marginBottom: 4,
  },
});

export default PermissionsContent;
