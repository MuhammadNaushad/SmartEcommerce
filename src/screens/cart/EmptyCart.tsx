import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppFont } from "../../styles/fontName";
import { AppColor } from "../../styles/colors";
import AppButtons from "../../components/buttons/AppButtons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/texts/AppText";

const EmptyCart = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={100}
        color={AppColor.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart is Empty</AppText>
      <AppText style={styles.subTitle}>
        Brows our products and find something you like
      </AppText>
      <AppButtons
        style={styles.button}
        onPress={() => {
          navigator.navigate("HomeScreen");
        }}
        title={"Start Shopping"}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: 20,
    fontFamily: AppFont.Bold,
    color: AppColor.primary,
    marginBottom: vs(10),
  },
  subTitle: {
    fontSize: 16,
    fontFamily: AppFont.Medium,
    color: AppColor.midGray,
    textAlign: "center",
    marginBottom: vs(20),
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
