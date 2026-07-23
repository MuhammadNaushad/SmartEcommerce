import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppFont } from "../../styles/fontName";
import { AppColor } from "../../styles/colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { CartItemProps } from "../../types/cartItemType";
import { CartItemSlice } from "../../store/reducers/cartSlice";

interface CartItemMainProps {
  item: CartItemSlice;
  onDeletePress?: () => void;
  onIncreasePress?: () => void;
  onDecreasePress?: () => void;
}
const CartItem = ({
  item,
  onDeletePress,
  onIncreasePress,
  onDecreasePress,
}: CartItemMainProps) => {
  return (
    <View style={styles.container}>
      {/* Image view*/}
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item.product.imageURL }}
          style={styles.image}
        ></Image>
      </View>
      {/* Details View */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.itemtitle} children={item.product.title} />
        <AppText style={styles.itemPrice} children={item.sum} />
        {/* Quantity View */}
        <View style={styles.qtyContainer}>
          <TouchableOpacity onPress={onIncreasePress} style={styles.iconButton}>
            <FontAwesome
              name="plus"
              size={s(10)}
              color={AppColor.primary}
            ></FontAwesome>
          </TouchableOpacity>
          <AppText style={styles.qtyStr} children={item.qty} />
          <TouchableOpacity style={styles.iconButton} onPress={onDecreasePress}>
            <FontAwesome
              name="minus"
              size={s(10)}
              color={AppColor.primary}
            ></FontAwesome>
          </TouchableOpacity>
        </View>
      </View>
      {/* Delete Button View */}
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity onPress={onDeletePress} style={styles.deleteButton}>
          <AntDesign
            name="delete"
            size={s(14)}
            color={AppColor.red}
          ></AntDesign>
          <AppText style={styles.deleteStr} children={"Delete"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderBottomColor: AppColor.blueGray,
  },
  imgContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteButtonContainer: {
    flex: 1,
    paddingEnd: s(12),
  },
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  image: {
    height: s(80),
    width: s(80),
    borderRadius: 5,
  },
  itemtitle: {
    fontSize: 14,
    marginTop: vs(5),
    fontFamily: AppFont.Medium,
    color: AppColor.primary,
  },
  itemPrice: {
    fontSize: 16,
    marginVertical: vs(5),
    fontFamily: AppFont.Bold,
    color: AppColor.primary,
  },
  deleteStr: {
    marginLeft: s(7),
    fontFamily: AppFont.Medium,
    fontSize: 12,
    color: AppColor.midGray,
    marginTop: s(3),
  },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: 1,
    borderColor: AppColor.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColor.lightGray,
    padding: s(5),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  qtyStr: {
    flex: 1,
    textAlign: "center",
    color: AppColor.primary,
  },
});
