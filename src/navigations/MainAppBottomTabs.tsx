import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/settings/ProfileScreen";
import { AppColor } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColor.primary,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        tabBarStyle: {},
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color}></Ionicons>
          ),
          title: "Home",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color}></Ionicons>
          ),
          title: "Cart",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color}></Ionicons>
          ),
          title: "Profile",
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
