import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import MainAppBottomTabs from "./MainAppBottomTabs";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={SignInScreen}></Stack.Screen>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
