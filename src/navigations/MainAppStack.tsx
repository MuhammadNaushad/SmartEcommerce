import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import MainAppBottomTabs from "./MainAppBottomTabs";
import AuthStack from "./AuthStack";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import OrdersScreen from "../screens/orders/OrdersScreen";
import { AppColor } from "../styles/colors";

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
