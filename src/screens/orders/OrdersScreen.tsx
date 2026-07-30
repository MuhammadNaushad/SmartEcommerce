import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import OrdersCard, { OrderProps } from "../../components/orders/OrdersCard";
import { AppColor } from "../../styles/colors";
import { s } from "react-native-size-matters";
import { orders } from "../../data/orders";
import { fetchOrders } from "../../config/dataServices";
import { OrdersItemProps } from "../../types/orderType";
import LoadingDailog from "../../components/loadingDailog/loadingDailog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setLoading } from "../../store/reducers/commonSlice";

const OrdersScreen = () => {
  const { isLoading } = useSelector((state: RootState) => state.commonSlice);
  const dispatch = useDispatch();
  const [orderList, setOrderList] = useState<OrdersItemProps[]>([]);

  const getOrders = async () => {
    try {
      dispatch(setLoading(true));
      const ordersList = await fetchOrders();
      console.log("===============OrdersList=====================");
      console.log(ordersList);
      setOrderList(ordersList);
      dispatch(setLoading(false));
      console.log("====================================");
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={styles.container}>
      <>
        <LoadingDailog visible={isLoading} />
        <FlatList
          data={orderList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.createdAt.toString()}
          renderItem={({ item }) => {
            return <OrdersCard item={item} />;
          }}
        />
      </>
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
