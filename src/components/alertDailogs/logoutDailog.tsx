import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface LogoutDialogProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

// ─── Logout Alert Dialog ────────────────────────────────────
const LogoutDialog = ({ visible, onCancel, onConfirm }: LogoutDialogProps) => (
  <Modal transparent animationType="fade" visible={visible}>
    <View style={styles.overlay}>
      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>Logout</Text>
        <Text style={styles.alertMessage}>
          Kya aap sach mein logout karna chahte hain?
        </Text>
        <View style={styles.alertButtons}>
          <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
            <Text style={styles.confirmText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default LogoutDialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  // Progress Dialog
  progressBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  progressText: {
    fontSize: 16,
    color: "#333",
  },

  // Logout Alert Dialog
  alertBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 280,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 24,
  },
  alertButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  cancelBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cancelText: {
    fontSize: 14,
    color: "#888",
    fontWeight: "600",
  },
  confirmBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  confirmText: {
    fontSize: 14,
    color: "#E91E8C",
    fontWeight: "700",
  },

  // Buttons
  button: {
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#777",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    letterSpacing: 1,
  },
});
