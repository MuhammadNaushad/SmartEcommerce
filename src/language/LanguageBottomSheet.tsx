import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../components/texts/AppText";
import AppButtons from "../components/buttons/AppButtons";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../components/textInputs/RadioWithTitle";

const LanguageBottomSheet = () => {
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={{ marginBottom: vs(10), textAlign: "center" }}>
          Change Language
        </AppText>
        <RadioWithTitle title="English" selected={true} />
        <RadioWithTitle title="Dutch" selected={true} />
        <RadioWithTitle title="Urdu" selected={false} />
        <AppButtons title="Change" onPress={() => {}} />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
});
