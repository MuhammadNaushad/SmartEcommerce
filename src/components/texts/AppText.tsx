import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { s } from "react-native-size-matters";
import { AppColor } from "../../styles/colors";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "bold" | "medium" | "small";
}

const AppText = ({
  children,
  style,
  variant = "small",
  ...otherProps
}: AppTextProps) => {
  return (
    <Text {...otherProps} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: AppColor.black,
    fontWeight: "700",
  },
  medium: {
    fontSize: s(16),
    color: AppColor.black,
    fontWeight: "500",
  },
  small: {
    fontSize: s(14),
    color: AppColor.black,
  },
});
