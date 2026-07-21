import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../texts/AppText";
import { AppColor } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import { AppFont } from "../../styles/fontName";
import { MaterialIcons } from "@expo/vector-icons";

interface ProfileSectionButtonProps {
  onPress: () => void;
  title: string;
}

const ProfileSectionButton = ({
  onPress,
  title,
}: ProfileSectionButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColor.midGray}
        ></MaterialIcons>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: AppColor.lightGray,
    flexDirection: "row",
    marginTop: vs(14),
    paddingBottom: vs(10),
    width: "100%",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: s(16),
    fontFamily: AppFont.Medium,
    color: AppColor.primary,
  },
  titleContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: s(8),
  },
});
