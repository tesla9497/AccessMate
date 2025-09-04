import React, { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "../components/Header";
import TopTabNavigator from "../components/TopTabNavigator";
import { TabProvider, useTabContext } from "../contexts/TabContext";
import { SafeScreen } from "../components/ui";
import Colors from "@/constants/Colors";

const MainScreenContent = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const { tab } = useLocalSearchParams();

  useEffect(() => {
    if (tab && typeof tab === "string") {
      setActiveTab(tab);
    }
  }, [tab, setActiveTab]);

  const getHeaderTitle = (tabName: string) => {
    switch (tabName) {
      case "Profile":
        return "Profile";
      case "Permissions":
        return "Permissions";
      case "Email":
        return "Emails";
      default:
        return "AccessMate";
    }
  };

  return (
    <SafeScreen style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.light.background}
      />
      <Header title={getHeaderTitle(activeTab)} showBackButton={true} />
      <TopTabNavigator initialTab={tab as string} />
    </SafeScreen>
  );
};

const MainScreen = () => {
  return (
    <TabProvider>
      <MainScreenContent />
    </TabProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});

export default MainScreen;
