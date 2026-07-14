import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColor } from "../../styles/colors";
import { ReactNode } from "react";
import { IS_ANDROID } from "../../constants/constants";

interface AppSafeViewProps {
  children: ReactNode;
  style: ViewStyle;
}

const AppSafeView = ({ children, style }: AppSafeViewProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColor.white,
    paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
