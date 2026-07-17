import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";
import { AppFont, NunitoBold } from "../../styles/fontName";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeaders />
      <Text style={{ fontFamily: AppFont.Bold, fontSize: 40 }}>
        Home Screen
      </Text>
      <Text style={{ fontFamily: AppFont.Medium, fontSize: 40 }}>
        Home Screen
      </Text>
      <Text style={{ fontSize: 40 }}>Home Screen</Text>
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
