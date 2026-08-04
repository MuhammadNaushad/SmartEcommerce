import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../components/texts/AppText";
import AppButtons from "../components/buttons/AppButtons";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../components/textInputs/RadioWithTitle";
import { languageList } from "../localization/LanguageList";
import i18n from "../localization/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageBottomSheet = () => {
  const [language, setlanguage] = useState(i18n.language);

  const onLanguagePress = (code: string) => {
    setlanguage(code);
  };

  const submit = () => {
    SheetManager.hide("LANG_SHEET");
    i18n.changeLanguage(language);
  };

  /*  const saveLang = async (lang: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, lang);
    } catch (error) {}
  }; */

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={{ marginBottom: vs(10), textAlign: "center" }}>
          Change Language
        </AppText>

        {languageList.map((lang) => (
          <RadioWithTitle
            key={lang.code}
            title={lang.label}
            onPress={() => onLanguagePress(lang.code)}
            selected={language === lang.code}
          />
        ))}
        <AppButtons
          title="Change"
          onPress={() => {
            submit();
          }}
        />
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
