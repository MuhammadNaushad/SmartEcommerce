import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { paddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
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
        <ProfileSectionButton onPress={() => {}} title={"Log Out"} />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
