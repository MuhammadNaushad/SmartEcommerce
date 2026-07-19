import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColor } from "../../styles/colors";

interface TotalViewsProps {
  itemPrice: number;
  tax: number;
  fee: number;
  grandtotal: number;
}

const TotalViews = ({ itemPrice, tax, fee, grandtotal }: TotalViewsProps) => {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.title}>Item Price :</AppText>
        <AppText style={styles.title}>${itemPrice ?? 0}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.title}>Taxes :</AppText>
        <AppText style={styles.title}>${tax}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.title}>Shipping Fee :</AppText>
        <AppText style={styles.title}>${fee}</AppText>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.row}>
        <AppText style={styles.title}>Grand Total :</AppText>
        <AppText style={styles.title}>${grandtotal}</AppText>
      </View>
    </View>
  );
};

export default TotalViews;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  title: {
    fontSize: 16,
    color: AppColor.primary,
  },
  price: {
    fontSize: 16,
    color: AppColor.primary,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: AppColor.blueGray,
  },
});
