import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";
import Toast from "react-native-toast-message";

import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("./src/assets/fonts/Nunito-Bold.ttf"),
    NunitoMedium: require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainAppStack />
        <FlashMessage position="center" />
        <Toast />
      </NavigationContainer>
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
