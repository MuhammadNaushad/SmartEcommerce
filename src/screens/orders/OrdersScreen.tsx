import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import OrdersCard from "../../components/orders/OrdersCard";
import { AppColor } from "../../styles/colors";
import { s } from "react-native-size-matters";
import { orders } from "../../data/orders";

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <OrdersCard item={item} />;
        }}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.white,
    padding: s(16),
  },
});
