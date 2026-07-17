import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeView from "./src/components/views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Toast from "react-native-toast-message";
import AppButtons from "./src/components/buttons/AppButtons";
import AppTextInput from "./src/components/textInputs/TextInput";
import SignInScreen from "./src/screens/auth/SignInScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigations/AuthStack";
import MainAppStack from "./src/navigations/MainAppStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <>
        <NavigationContainer>
          <MainAppStack />
          <FlashMessage position="center" />
          <Toast />
        </NavigationContainer>
      </>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
