import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import MainAppBottomTabs from "./MainAppBottomTabs";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
      <Stack.Screen
        name="MainAppBottomTabs"
        component={MainAppBottomTabs}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainAppStack;
