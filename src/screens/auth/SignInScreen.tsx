import {
  Alert,
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
import AppTextInputController from "../../components/textInputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { showMessage } from "react-native-flash-message";
import Toast from "react-native-toast-message";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "invalid email",
    )

    .min(3, "Min 3 chars required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "lenght should be 6"),
});

const SignInScreen = () => {
  const navigator = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const userLogin = async (formData: FormData) => {
    console.log(formData);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      console.log(user);
      Toast.show({
        text1: "User logged in successfully",
        type: "success",
      });
      navigator.navigate("MainAppBottomTabs");
    } catch (error: any) {
      console.log(error);
      let errorMsg = "";
      if (error.code === "auth/user-not-found") {
        errorMsg = "User not found";
      } else if (error.code === "auth/invalid-credential") {
        errorMsg = "Invalid email or password";
      } else {
        errorMsg = "Something went wrong";
      }
      showMessage({ message: errorMsg, type: "danger" });
      // Toast.show({
      //   text1: errorMsg,
      //   type: "error",
      // });
    }
  };

  return (
    <AppSafeView style={styles.container}>
      <AppKeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image source={IMAGES.appLogo} style={styles.logo} />
          <AppTextInputController
            control={control}
            name="email"
            placeholder="Enter Email"
            keyboardType="email-address"
          />
          <AppTextInputController
            control={control}
            name="password"
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <AppText
            children={"Smart Ecommerce"}
            style={styles.appName}
          ></AppText>
          <AppButtons
            onPress={() => {
              console.log("Hi");

              handleSubmit(userLogin)();
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
