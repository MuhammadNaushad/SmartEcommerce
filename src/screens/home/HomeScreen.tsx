import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeaders from "../../components/headers/HomeHeaders";
import ProductCard from "../../components/cards/ProductCard";
import { s, vs } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import { getProductsData } from "../../config/dataServices";
import LoadingDailog from "../../components/loadingDailog/loadingDailog";
import { RootState } from "../../store/store";
import { setLoading } from "../../store/reducers/commonSlice";
import { ProductProps } from "../../types/productType";
import { setProducts } from "../../store/reducers/productSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.commonSlice);
  const { productsList } = useSelector(
    (state: RootState) => state.productSlice,
  );

  // const [products, setProducts] = useState<ProductProps[]>([]);
  const fetchData = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getProductsData();
      dispatch(setLoading(false));

      // setProducts(data);
      dispatch(setProducts(data));
      console.log("==============FireStore DAta======================");
      console.log("====================================");
    } catch (error) {
      dispatch(setLoading(false));
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchData();
    console.log(productsList);
  }, []);

  return (
    <AppSafeView>
      <HomeHeaders />
      {isLoading ? (
        <LoadingDailog visible={isLoading} />
      ) : (
        <FlatList
          data={productsList}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductCard
                product={item}
                onCartPress={() => {
                  dispatch(addItemToCart(item));
                }}
              />
            );
          }}
        />
      )}
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
