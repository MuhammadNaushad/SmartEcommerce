import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles, paddingHorizontal } from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { IS_ANDROID, IS_IOS } from "../../constants/constants";
import AppSafeView from "../../components/views/AppSafeView";
import { AppColor } from "../../styles/colors";
import AppTextInput from "../../components/textInputs/TextInput";
import AppButtons from "../../components/buttons/AppButtons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppTextInputController from "../../components/textInputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  fullName: yup
    .string()
    .required("Name is required")
    .min(3, "Min 3 chars required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Number must be only digits")
    .min(10, "Min 10 digits required"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Min 5 chars required"),
});
const CheckoutScreen = () => {
  const insets = useSafeAreaInsets();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const saveOrder = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingHorizontal: paddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            control={control}
            name="fullName"
            placeholder="Full Name"
          />
          <AppTextInputController
            control={control}
            name="mobile"
            placeholder="Phone Number"
          />
          <AppTextInputController
            control={control}
            name="address"
            placeholder="Detailed Address"
          />
        </View>
      </View>

      <View
        style={[
          styles.bottomButtonContainer,

          { paddingBottom: insets.bottom || vs(15) },
        ]}
      >
        <AppButtons title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColor.white,
    marginTop: vs(15),
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: paddingHorizontal,
    width: "100%",
    bottom: IS_ANDROID ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColor.lightGray,
    paddingTop: vs(10),
    // paddingBottom: insets.bottom || vs(15),
  },
});
