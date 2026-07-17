import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeaders />

      <Text>ProfileScreen</Text>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
