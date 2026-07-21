import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles } from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { AppColor } from "../../styles/colors";
import AppText from "../texts/AppText";
import { OrdersItemProps } from "../../types/orderType";

interface OrderProps {
  item: OrdersItemProps;
}

const OrdersCard = ({ item }: OrderProps) => {
  return (
    <View style={[styles.container, commonStyles.shadow]}>
      <AppText variant="medium">ORDERS DETAILS</AppText>
      <View style={styles.divider}></View>
      <View style={styles.priceView}>
        <AppText>Total Price :</AppText>
        <AppText variant="bold">{item?.price ?? 0}</AppText>
      </View>
      <View style={styles.dateView}>
        <AppText>Date :</AppText>
        <AppText variant="bold" style={{ color: AppColor.red }}>
          {item?.date ?? 0}
        </AppText>
      </View>
    </View>
  );
};

export default OrdersCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: vs(8),
    backgroundColor: AppColor.white,
    borderRadius: s(8),
    padding: s(10),
  },
  divider: {
    backgroundColor: AppColor.midGray,
    height: 1,
    width: "100%",
    marginVertical: vs(4),
  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(5),
  },
  dateView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
