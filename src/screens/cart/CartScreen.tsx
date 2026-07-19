import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import { ShippingFee, Tax } from "../../constants/constants";
import { paddingHorizontal } from "../../styles/sharedStyles";
import AppButtons from "../../components/buttons/AppButtons";
const tempItem = {
  id: 1,
  price: 1199,
  title: "iPhone 16 Pro Max",
  imageURL:
    "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
  qty: 1,
};
const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeaders />
      {/* <EmptyCart /> */}
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CartItem item={item} />}
        ></FlatList>
        <TotalViews
          itemPrice={599}
          tax={Tax}
          fee={ShippingFee}
          grandtotal={699}
        />
        <AppButtons title="Continue" onPress={() => {}}></AppButtons>
      </View>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: paddingHorizontal },
  list: {
    padding: s(12),
  },
  row: {
    justifyContent: "space-between",
    marginBottom: vs(12),
  },
});
