import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeaders />
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return <ProductCard product={item} onCartPress={() => {}} />;
        }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    padding: s(12),
  },
  row: {
    justifyContent: "space-between",
    marginBottom: vs(12),
  },
});
