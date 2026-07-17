import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import AppTextInput from "../../components/textInputs/TextInput";
import AppButtons from "../../components/buttons/AppButtons";
import { paddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-path";
import { s, vs } from "react-native-size-matters";
import { IS_IOS } from "../../constants/constants";
import AppKeyboardAvoidingView from "../../components/keyboard/AppKeyboardAvoidingView";
import AppText from "../../components/texts/AppText";
import { AppColor } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigator = useNavigation();

  return (
    <AppSafeView style={styles.container}>
      <AppKeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image source={IMAGES.appLogo} style={styles.logo} />
          <AppTextInput
            value={Email}
            onTextChange={(value) => setEmail(value)}
            placeholder="Enter Email"
            keyboardType="email-address"
          />
          <AppTextInput
            value={Password}
            onTextChange={(value) => setPassword(value)}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <AppText
            children={"Smart Ecommerce"}
            style={styles.appName}
          ></AppText>
          <AppButtons
            onPress={() => {
              navigator.navigate("MainAppBottomTabs");
            }}
            title="Login"
            textStyle={{ fontWeight: "500" }}
          />
          <AppButtons
            onPress={() => {
              navigator.navigate("SignUpScreen");
            }}
            title="Sign Up"
            textStyle={{ fontWeight: "500" }}
            isOutline={true}
            style={styles.registerBtn}
          />
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddingHorizontal,
  },
  scrollContent: {
    flexGrow: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: vs(150),
    width: s(150),
    marginBottom: vs(30),
    marginTop: vs(50),
  },
  appName: {
    fontSize: 16,
    marginBottom: vs(15),
  },
  registerBtn: {
    marginTop: vs(10),
  },
});
