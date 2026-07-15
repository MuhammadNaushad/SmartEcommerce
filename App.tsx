import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSafeView from "./src/components/views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Toast from "react-native-toast-message";
import AppButtons from "./src/components/buttons/AppButtons";
import AppTextInput from "./src/components/textInputs/TextInput";

export default function App() {
  return (
    <SafeAreaProvider>
      <>
        <AppSafeView
          children={
            <View>
              <AppTextInput
                value={""}
                onTextChange={(value) => {}}
                placeholder="Enter Email"
              />
              <AppTextInput
                value={""}
                onTextChange={(value) => {}}
                placeholder="Enter Email"
              />
              <AppButtons
                onPress={function (): void {
                  throw new Error("Function not implemented.");
                }}
                title={"Login"}
                textStyle={{ fontWeight: "500" }}
              ></AppButtons>
            </View>
          }
        ></AppSafeView>
        <FlashMessage position="center" />
        <Toast />
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
