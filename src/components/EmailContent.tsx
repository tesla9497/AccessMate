import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, IconButton, Card } from "./ui";
import Colors from "@/constants/Colors";

const EmailContent = () => {
  const handleGmailConnect = () => {
    console.log("Connect to Gmail");
  };

  const handleOutlookConnect = () => {
    console.log("Connect to Outlook");
  };

  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Connect to your email to unlock automatic receipt and invoice
          detection. No more forwarding or manual uploads.
        </Text>

        {/* Email Connection Cards */}
        <View style={styles.cardsContainer}>
          {/* Gmail Card */}
          <Card
            variant="elevated"
            padding="large"
            borderRadius="large"
            onPress={handleGmailConnect}
            style={styles.emailCard}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardIcon}>
                <Text style={styles.gmailIcon}>
                  <MaterialCommunityIcons
                    name="gmail"
                    size={24}
                    color={Colors.light.gmail}
                  />
                </Text>
              </View>
              <Text style={styles.cardTitle}>
                Connect Google Workspace (Gmail)
              </Text>
              <Text style={styles.cardSubtitle}>Mail + Calendar</Text>
            </View>
            <IconButton
              icon="add"
              onPress={handleGmailConnect}
              variant="primary"
              size="medium"
              style={styles.connectButton}
            />
          </Card>

          {/* Outlook Card */}
          <Card
            variant="elevated"
            padding="large"
            borderRadius="large"
            onPress={handleOutlookConnect}
            style={styles.emailCard}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardIcon}>
                <Text style={styles.outlookIcon}>
                  <MaterialCommunityIcons
                    name="microsoft-outlook"
                    size={24}
                    color={Colors.light.outlook}
                  />
                </Text>
              </View>
              <Text style={styles.cardTitle}>
                Connect Microsoft 365 (Outlook)
              </Text>
              <Text style={styles.cardSubtitle}>Mail + Calendar</Text>
            </View>
            <IconButton
              icon="add"
              onPress={handleOutlookConnect}
              variant="primary"
              size="medium"
              style={styles.connectButton}
            />
          </Card>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.footerContainer}>
        {/* Privacy Statement */}
        <Ionicons
          name="lock-closed-outline"
          size={16}
          color={Colors.light.primary}
          style={styles.privacyIcon}
        />
        <View style={styles.privacyContainer}>
          <Text style={styles.privacyText}>
            We'll only scan for receipts - not your personal emails. Your
            credentials are never shared with us.
          </Text>
        </View>

        <Button
          title="Continue"
          onPress={() => {}}
          variant="primary"
          size="large"
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
    marginBottom: 32,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  emailCard: {
    flex: 1,
    marginHorizontal: 4,
    position: "relative",
  },
  cardContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.light.backgroundTertiary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  gmailIcon: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.gmail,
  },
  outlookIcon: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.outlook,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.light.text,
    textAlign: "center",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    textAlign: "center",
  },
  connectButton: {
    position: "absolute",
    bottom: -12,
    alignSelf: "center",
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.light.shadowPrimary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  footerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  privacyIcon: {
    alignSelf: "center",
    marginBottom: 4,
  },
  privacyContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  privacyText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    lineHeight: 16,
    marginLeft: 8,
    textAlign: "center",
    flex: 1,
  },
});

export default EmailContent;
