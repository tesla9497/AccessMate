import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./ui";
import { ProfileContentProps } from "@/types";
import Colors from "@/constants/Colors";

const ProfileContent = ({ navigation }: ProfileContentProps) => {
  const [selectedAchievement, setSelectedAchievement] = useState(
    "Separate personal and business..."
  );
  const [selectedWorkType, setSelectedWorkType] = useState(
    "Freelancer / Independent Contr..."
  );
  const [selectedSector, setSelectedSector] = useState(
    "Real Estate (Agents, Property M..."
  );

  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.description}>
          We use this info to tailor categorization and suggest smart rules
          based on your work.
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>What are you hoping to achieve?</Text>
          <TouchableOpacity style={styles.inputField}>
            <Text style={styles.inputText}>{selectedAchievement}</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              color={Colors.light.textMuted}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Who are you, how do you work?</Text>
          <TouchableOpacity style={styles.inputField}>
            <Text style={styles.inputText}>{selectedWorkType}</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              color={Colors.light.textMuted}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            What sector do you primarily operate in?
          </Text>
          <TouchableOpacity style={styles.inputField}>
            <Text style={styles.inputText}>{selectedSector}</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              color={Colors.light.textMuted}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={() => {
            // Navigate to Permissions tab using tab navigator
            if (navigation) {
              navigation.navigate("Permissions");
            }
          }}
          variant="primary"
          size="large"
          style={styles.continueButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
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
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: Colors.light.textMuted,
    marginBottom: 8,
    fontWeight: "500",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputText: {
    fontSize: 16,
    color: Colors.light.text,
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  continueButton: {
    shadowColor: Colors.light.shadowPrimary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default ProfileContent;
