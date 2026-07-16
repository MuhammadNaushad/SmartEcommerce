import {
  KeyboardAvoidingView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React from "react";
import { IS_IOS } from "../../constants/constants";

interface AppKeyboardAvoidingViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const AppKeyboardAvoidingView = ({
  children,
  style,
}: AppKeyboardAvoidingViewProps) => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={IS_IOS ? "height" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AppKeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
