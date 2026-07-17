import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColor } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import { IMAGES } from "../../constants/images-path";

const HomeHeaders = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
    </View>
  );
};

export default HomeHeaders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(10),
  },
  logo: {
    height: vs(40),
    width: s(40),
    tintColor: AppColor.white,
  },
});
