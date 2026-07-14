import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeView from "./src/components/views/AppSafeView";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppSafeView
        children={
          <View>
            <AppText children={"Hello World!"}></AppText>
            <AppText children={"Hello World!"} variant="bold"></AppText>
            <StatusBar style="auto" />
          </View>
        }
      ></AppSafeView>
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
