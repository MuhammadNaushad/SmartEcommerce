import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeaders />

      <Text>CartScreen</Text>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
