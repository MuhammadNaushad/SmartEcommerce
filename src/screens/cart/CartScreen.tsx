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
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addItemToCart,
  removeItemToCart,
  removeProductFromCart,
} from "../../store/reducers/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  console.log(items);
  const getTotalAmount = items.reduce((acc, item) => acc + item.sum, 0);
  const getGrandTotal = getTotalAmount + Tax + ShippingFee;

  return (
    <AppSafeView>
      <HomeHeaders />
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={items}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onIncreasePress={() => dispatch(addItemToCart(item.product))}
                onDecreasePress={() => {
                  dispatch(removeItemToCart(item.product));
                }}
                onDeletePress={() => {
                  dispatch(removeProductFromCart(item.product));
                }}
              />
            )}
          ></FlatList>
          <TotalViews
            itemPrice={getTotalAmount}
            tax={Tax}
            fee={ShippingFee}
            grandtotal={getGrandTotal}
          />
          <AppButtons
            title="Continue"
            onPress={() => {
              navigation.navigate("Checkout Screen");
            }}
          ></AppButtons>
        </View>
      )}
      {/*  */}
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
