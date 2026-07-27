import { StyleSheet, Text, View } from "react-native";
import React from "react";
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

const ProfileScreen = () => {
  const { isLogout } = useSelector((state: RootState) => state.commonSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <LogoutDialog
        visible={isLogout}
        onCancel={() => {
          dispatch(showLogoutDailog(false));
        }}
        onConfirm={() => {
          dispatch(showLogoutDailog(false));
          navigation.navigate("AuthStack");
        }}
      />
      <HomeHeaders />
      <AppText variant="bold" style={{ marginTop: s(10) }}>
        Hello Naushad
      </AppText>
      <View style={{ paddingHorizontal: paddingHorizontal }}>
        <ProfileSectionButton
          onPress={() => {
            navigation.navigate("Orders Screen");
          }}
          title={"My Orders"}
        />
        <ProfileSectionButton onPress={() => {}} title={"Languages"} />
        <ProfileSectionButton
          onPress={() => {
            dispatch(showLogoutDailog(true));
          }}
          title={"Log Out"}
        />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
