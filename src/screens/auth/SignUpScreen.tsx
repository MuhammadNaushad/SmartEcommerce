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
// React-form-hook
import AppTextInputController from "../../components/textInputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { showMessage } from "react-native-flash-message";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import LoadingDailog from "../../components/loadingDailog/loadingDailog";
import { setLoading } from "../../store/reducers/commonSlice";
import { setUserData } from "../../store/reducers/userSlice";

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
  username: yup
    .string()
    .required("Name is required")
    .min(3, "Min 3 chars required"),
});

const SignUpScreen = () => {
  const { isLoading } = useSelector((state: RootState) => state.commonSlice);
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const userSignup = async (formData: FormData) => {
    try {
      dispatch(setLoading(true));

      console.log(formData);
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      dispatch(setLoading(false));

      Alert.alert("Signed up successfully");
      navigator.navigate("MainAppBottomTabs");
      //❌ Wrong — poora Firebase user object mat bhejo
      // dispatch(setUserData(result.user));

      // ✅ Correct — sirf plain data extract karo
      dispatch(
        setUserData({
          uid: user.user.uid,
          email: user.user.email,
          displayName: user.user.displayName,
          photoURL: user.user.photoURL,
          emailVerified: user.user.emailVerified,
        }),
      );
    } catch (error: any) {
      dispatch(setLoading(false));

      console.log(error);
      let errorMsg = "";
      if (error.code === "auth/email-already-in-use") {
        errorMsg = "Email is already in use";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "Invalid email";
      } else if (error.code === "auth/weak-password") {
        errorMsg = "Password is too weak";
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
          <LoadingDailog visible={isLoading} />

          <Image source={IMAGES.appLogo} style={styles.logo} />
          <AppTextInputController
            control={control}
            name="username"
            placeholder="Enter UserName"
          />
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
              handleSubmit(userSignup)();
            }}
            title="Create New Account"
            textStyle={{ fontWeight: "500" }}
          />
          <AppButtons
            onPress={() => {
              navigator.navigate("LoginScreen");
            }}
            title="Login"
            textStyle={{ fontWeight: "500" }}
            isOutline={true}
            style={styles.registerBtn}
          />
        </ScrollView>
      </AppKeyboardAvoidingView>
    </AppSafeView>
  );
};

export default SignUpScreen;

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
