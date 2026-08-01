import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColor } from "../../styles/colors";
import AppText from "../texts/AppText";

interface RadioWithTitleProps {
  title: string;
  selected?: boolean;
  onPress?: () => void;
}

const RadioWithTitle = ({ title, selected, onPress }: RadioWithTitleProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        {selected && <View style={styles.innercircle}></View>}
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default RadioWithTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: vs(10),
  },
  circle: {
    height: s(18),
    width: s(18),
    borderRadius: s(100),
    borderWidth: 2,
    borderColor: AppColor.black,
    justifyContent: "center",
    alignItems: "center",
  },
  innercircle: {
    height: s(9),
    width: s(9),
    borderRadius: s(100),
    borderWidth: 1.5,
    borderColor: AppColor.black,
    backgroundColor: AppColor.black,
  },
  title: {
    fontSize: 17,
    marginLeft: s(8),
  },
});
