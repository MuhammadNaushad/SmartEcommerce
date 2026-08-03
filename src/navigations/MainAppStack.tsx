import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import MainAppBottomTabs from "./MainAppBottomTabs";
import AuthStack from "./AuthStack";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import OrdersScreen from "../screens/orders/OrdersScreen";
import { AppColor } from "../styles/colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUserData } from "../store/reducers/userSlice";
import { RootState } from "../store/store";
import LoadingDailog from "../components/loadingDailog/loadingDailog";

const Stack = createStackNavigator();

const MainAppStack = () => {
  const { userData, isLoading } = useSelector(
    (state: RootState) => state.userSlice,
  );
  const dispatch = useDispatch();

  const checkLoginStatus = async () => {
    try {
      const userStoredData = await AsyncStorage.getItem("USER_DATA");
      if (userStoredData) {
        dispatch(setUserData(JSON.parse(userStoredData)));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log("Error AsyncStorage");
      dispatch(setLoading(false));
    } finally {
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (isLoading) return <LoadingDailog visible={true} />;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={userData ? "MainAppBottomTabs" : "AuthStack"}
    >
      <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
      <Stack.Screen
        name="MainAppBottomTabs"
        component={MainAppBottomTabs}
      ></Stack.Screen>

      <Stack.Screen
        name="Checkout Screen"
        component={CheckoutScreen}
        options={{
          headerShown: true,
          headerBackTitle: "",
          headerTintColor: AppColor.primary,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Orders Screen"
        component={OrdersScreen}
        options={{
          headerShown: true,
          headerTintColor: AppColor.primary,
          headerBackTitle: "",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainAppStack;
