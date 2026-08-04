import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { paddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import LogoutDialog from "../../components/alertDailogs/logoutDailog";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { showLogoutDailog } from "../../store/reducers/commonSlice";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserData } from "../../store/reducers/userSlice";
import { signOut } from "@firebase/auth";
import { auth } from "../../config/firebaseConfig";

const ProfileScreen = () => {
  const { isLogout } = useSelector((state: RootState) => state.commonSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [Expense, setExpense] = useState(0);

  const getLang = async () => {
    try {
      const value = await AsyncStorage.getItem("LANG");
      if (value !== null) {
      }
    } catch (e) {
      // error reading value
    }
  };

  //Clear Data
  const clearLocalStoredData = async () => {
    try {
      await AsyncStorage.removeItem("expense");
    } catch (error) {}
  };

  useEffect(() => {
    getLang();
  }, []);

  const handleLogut = async () => {
    dispatch(showLogoutDailog(false));
    await AsyncStorage.removeItem("USER_DATA");
    navigation.navigate("AuthStack");
    await signOut(auth);
  };

  return (
    <AppSafeView>
      <LogoutDialog
        visible={isLogout}
        onCancel={() => {
          dispatch(showLogoutDailog(false));
        }}
        onConfirm={handleLogut}
      />
      <HomeHeaders />
      <AppText variant="bold" style={{ marginTop: s(10) }}>
        {t("welcome", { userName: { Expense } })}
      </AppText>
      {/* <Text>{Expense}</Text> */}
      {/* <AppText variant="bold" style={{ marginTop: s(10) }}>
        {t("common.messages.welcome")}
      </AppText> */}
      <View style={{ paddingHorizontal: paddingHorizontal }}>
        <ProfileSectionButton
          onPress={() => {
            navigation.navigate("Orders Screen");
          }}
          title={"My Orders"}
        />
        <ProfileSectionButton
          onPress={() => {
            SheetManager.show("LANG_SHEET");
          }}
          title={"Languages"}
        />
        <ProfileSectionButton
          onPress={async () => {
            dispatch(showLogoutDailog(true));
            /*  setExpense(Expense + 10);
            saveData(`${Expense + 10}`);
            clearLocalStoredData(); */
          }}
          title={"Log Out"}
        />
        <LanguageBottomSheet />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
