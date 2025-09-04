import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/Header";
import TopTabNavigator from "../components/TopTabNavigator";
import { TabProvider, useTabContext } from "../contexts/TabContext";
import { useLocalSearchParams } from "expo-router";
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.light.background}
      />
      <Header title={getHeaderTitle(activeTab)} showBackButton={true} />
      <TopTabNavigator initialTab={tab as string} />
    </SafeAreaView>
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
