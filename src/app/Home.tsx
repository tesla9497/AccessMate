import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Button, SafeScreen } from "../components/ui";
import Colors from "@/constants/Colors";

const Home = () => {
  const router = useRouter();

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>AccessMate</Text>
        <Text style={styles.subtitle}>Choose a screen to view</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Go to Main Screen"
            onPress={() => router.push("/MainScreen")}
            variant="primary"
            size="large"
          />
        </View>
      </View>
    </SafeScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.backgroundSecondary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    marginBottom: 48,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
});
