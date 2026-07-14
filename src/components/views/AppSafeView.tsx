import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColor } from "../../styles/colors";

interface AppSafeViewProps {
  children: React.ReactNode;
}

const AppSafeView = ({ children }: AppSafeViewProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColor.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
});
