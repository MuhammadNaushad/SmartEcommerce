import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColor } from "../../styles/colors";

interface AppButtonsProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  disabled?: boolean;
  isOutline?: boolean;
}

const AppButtons = ({
  onPress,
  style,
  title,
  textStyle,
  disabled = false,
  isOutline = false,
}: AppButtonsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles["container"],
        { backgroundColor: disabled ? AppColor.disablesGray : AppColor.black },
        style,
        isOutline && styles.outline,
      ]}
      disabled={disabled}
    >
      <AppText
        style={[
          styles.titleText,
          textStyle,
          isOutline && { color: AppColor.black },
        ]}
        children={title}
        variant="bold"
      ></AppText>
    </TouchableOpacity>
  );
};

export default AppButtons;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: vs(35),
    borderRadius: s(25),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: AppColor.black,
  },
  titleText: {
    fontSize: s(16),
    color: AppColor.white,
  },
  outline: {
    borderColor: AppColor.black,
    backgroundColor: AppColor.white,
    borderWidth: 1,
  },
});
