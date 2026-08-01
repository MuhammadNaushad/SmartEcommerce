import {
  ActivityIndicator,
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setLoading } from "../../store/reducers/commonSlice";
import LoadingDailog from "../../components/loadingDailog/loadingDailog";
import { setUserData } from "../../store/reducers/userSlice";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  email: yup
    .string()
    .required(`${t("email_is_required")}`)
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      `${t("invalid_email")}`,
    )
    .min(3, `${t("min_3_chars_required")}`),
  password: yup
    .string()
    .required(`${t("password_is_required")}`)
    .min(6, `${t("lenght_should_be_6")}`),
});
const SignInScreen = () => {
  const { isLoading } = useSelector((state: RootState) => state.commonSlice);
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const userLogin = async (formData: FormData) => {
    dispatch(setLoading(true));
    console.log(formData);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      console.log(user);
      dispatch(setLoading(false));
      Toast.show({
        text1: `${t("user_logged_in_successfully")}`,
        type: "success",
      });
      navigator.navigate("MainAppBottomTabs");
      console.log(JSON.stringify(user, null, 3));
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
      if (error.code === "auth/user-not-found") {
        errorMsg = `${t("user_not_found")}`;
      } else if (error.code === "auth/invalid-credential") {
        errorMsg = `${t("invalid_email_or_password")}`;
      } else {
        errorMsg = `${t("something_went_wrong")}`;
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
          <>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInputController
              control={control}
              name="email"
              placeholder={t("Email")}
              keyboardType="email-address"
            />
            <AppTextInputController
              control={control}
              name="password"
              placeholder={t("Password")}
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
              title={t("login")}
              textStyle={{ fontWeight: "500" }}
            />
            <AppButtons
              onPress={() => {
                navigator.navigate("SignUpScreen");
              }}
              title={t("sign_up")}
              textStyle={{ fontWeight: "500" }}
              isOutline={true}
              style={styles.registerBtn}
            />
          </>
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
