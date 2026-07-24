import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import AppTextInput from "./TextInput";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { AppColor } from "../../styles/colors";
import AppText from "../texts/AppText";
import { vs } from "react-native-size-matters";

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextInputProps>;
}

const AppTextInputController = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}: AppTextInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            placeholder={placeholder}
            onTextChange={onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.errorInput}
          ></AppTextInput>
          {error && <AppText style={styles.textError}>{error.message}</AppText>}
        </>
      )}
    ></Controller>
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  errorInput: {
    borderColor: AppColor.red,
  },
  textError: {
    color: AppColor.red,
    fontSize: 12,
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: -vs(5),
  },
});
