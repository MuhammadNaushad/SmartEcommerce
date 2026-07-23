import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppColor } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppFont } from "../../styles/fontName";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";
import { ProductProps } from "../../types/productType";

interface ProductCardProps {
  product: ProductProps;
  onCartPress: () => void;
}

const ProductCard = ({ product, onCartPress }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      {/* Cart Button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={onCartPress}>
        <Ionicons name="cart" size={s(15)} color={AppColor.white}></Ionicons>
      </TouchableOpacity>
      {/* IMAGE */}
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{
            uri:
              product?.imageURL ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvCiQK_G5FJpnkneCzJNWdSdO5FoQto77TfrIU5cHHw&s=10",
          }}
        />
      </View>
      {/* DETAILS */}
      <View style={styles.details}>
        <AppText
          style={styles.title}
          children={product?.title ?? "Sample Phone"}
        />
        <AppText
          style={styles.price}
          children={`$${product?.price ?? "$ 0.0"}`}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: vs(160),
    width: s(150),
    backgroundColor: AppColor.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imgView: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(100),
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    paddingTop: vs(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  title: {
    fontFamily: AppFont.Medium,
    color: AppColor.primary,
  },
  price: {
    fontFamily: AppFont.Bold,
    color: AppColor.primary,
    marginTop: vs(7),
  },
  addToCartButton: {
    position: "absolute",
    height: s(28),
    width: s(28),
    top: 5,
    left: 5,
    borderRadius: s(14),
    backgroundColor: AppColor.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
