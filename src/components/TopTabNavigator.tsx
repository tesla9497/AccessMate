import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useFocusEffect } from "@react-navigation/native";
import Profile from "../app/Profile";
import Permissions from "../app/Permissions";
import Email from "../app/Email";
import { useTabContext } from "../contexts/TabContext";
import { TopTabNavigatorProps } from "@/types";
import Colors from "@/constants/Colors";

const Tab = createMaterialTopTabNavigator();

// Wrapper components that update context when focused
const ProfileWrapper = ({ navigation }: { navigation: any }) => {
  const { setActiveTab } = useTabContext();

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab("Profile");
    }, [setActiveTab])
  );
  return <Profile navigation={navigation} />;
};

const PermissionsWrapper = ({ navigation }: { navigation: any }) => {
  const { setActiveTab } = useTabContext();

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab("Permissions");
    }, [setActiveTab])
  );
  return <Permissions navigation={navigation} />;
};

const EmailWrapper = () => {
  const { setActiveTab } = useTabContext();

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab("Email");
    }, [setActiveTab])
  );
  return <Email />;
};

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({ initialTab }) => {
  const { activeTab } = useTabContext();

  return (
    <Tab.Navigator
      initialRouteName={initialTab || activeTab}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgba(139, 92, 246, 0.2)",
          marginHorizontal: 20,
          borderRadius: 12,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarContentContainerStyle: {
          paddingHorizontal: 5,
        },
        tabBarItemStyle: {
          borderRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
          textTransform: "none",
        },
        tabBarActiveTintColor: Colors.light.text,
        tabBarInactiveTintColor: Colors.light.textTertiary,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.light.background,
          height: "80%",
          borderRadius: 8,
          alignSelf: "center",
          marginTop: "10%",
          marginBottom: "10%",
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: "transparent",
        },
        swipeEnabled: false,
        tabBarPressColor: "transparent",
      }}
    >
      <Tab.Screen
        name="Profile"
        children={({ navigation }) => (
          <ProfileWrapper navigation={navigation} />
        )}
        options={{
          title: "Profile",
        }}
      />
      <Tab.Screen
        name="Permissions"
        children={({ navigation }) => (
          <PermissionsWrapper navigation={navigation} />
        )}
        options={{
          title: "Permission",
        }}
      />
      <Tab.Screen
        name="Email"
        component={EmailWrapper}
        options={{
          title: "Email",
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
