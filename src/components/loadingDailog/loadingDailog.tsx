import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";

interface LaodingDailogProps {
  visible: boolean;
  message?: string;
}

const LoadingDailog = ({
  visible,
  message = "Loading ...",
}: LaodingDailogProps) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.dialogBox}>
          <ActivityIndicator size="large" />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingDailog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogBox: {
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
  message: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#888",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    letterSpacing: 1,
  },
});
