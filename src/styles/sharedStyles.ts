import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { AppColor } from "./colors";

export const paddingHorizontal = s(12);

export const commonStyles = StyleSheet.create({
  shadow: {
    // android
    elevation: 4,
    // iOS
    shadowColor: AppColor.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
