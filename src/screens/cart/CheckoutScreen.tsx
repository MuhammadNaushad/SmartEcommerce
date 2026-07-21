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

const CheckoutScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingHorizontal: paddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="Full Name" />
          <AppTextInput placeholder="Phone Number" />
          <AppTextInput placeholder="Detailed Address" />
        </View>
      </View>

      <View
        style={[
          styles.bottomButtonContainer,

          { paddingBottom: insets.bottom || vs(15) },
        ]}
      >
        <AppButtons title="Confirm" />
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
