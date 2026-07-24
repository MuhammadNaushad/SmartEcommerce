import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import React from "react";
import { AppColor } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";

interface AppTextInputProps {
  value: string;
  onTextChange: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
}

const AppTextInput = ({
  value,
  onTextChange,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}: AppTextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onTextChange}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    ></TextInput>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(35),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColor.borderColor,
    paddingHorizontal: s(15),
    fontSize: 16,
    backgroundColor: AppColor.white,
    width: "100%",
    marginBottom: vs(10),
  },
});
