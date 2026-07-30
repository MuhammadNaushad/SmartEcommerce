import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles, paddingHorizontal } from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import {
  IS_ANDROID,
  IS_IOS,
  ShippingFee,
  Tax,
} from "../../constants/constants";
import AppSafeView from "../../components/views/AppSafeView";
import { AppColor } from "../../styles/colors";
import AppTextInput from "../../components/textInputs/TextInput";
import AppButtons from "../../components/buttons/AppButtons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppTextInputController from "../../components/textInputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addDoc, collection, doc } from "firebase/firestore";
import { firestore } from "../../config/firebaseConfig";
import { showMessage } from "react-native-flash-message";
import LoadingDailog from "../../components/loadingDailog/loadingDailog";
import { setLoading } from "../../store/reducers/commonSlice";
import { useNavigation } from "@react-navigation/native";
import { emptyCart } from "../../store/reducers/cartSlice";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  fullName: yup
    .string()
    .required("Name is required")
    .min(3, "Min 3 chars required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Number must be only digits")
    .min(10, "Min 10 digits required"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Min 5 chars required"),
});
const CheckoutScreen = () => {
  const insets = useSafeAreaInsets();

  const { userData } = useSelector((state: RootState) => state.userSlice);
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const { isLoading } = useSelector((state: RootState) => state.commonSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getTotalAmount = items.reduce((acc, item) => acc + item.sum, 0);
  const getGrandTotal = getTotalAmount + Tax + ShippingFee;

  console.log("================userdata====================");
  console.log(JSON.stringify(userData, null, 3));
  console.log("====================================");
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const saveOrder = async (formData: FormData) => {
    try {
      dispatch(setLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const orderBody = {
        ...formData,
        items,
        getTotalAmount,
        createdAt: new Date(),
        getGrandTotal,
      };
      const userOrderRef = collection(
        doc(firestore, "users", userData.uid),
        "orders",
      );
      addDoc(userOrderRef, orderBody);
      //Admin Orders
      const ordersRef = collection(firestore, "orders");
      await addDoc(ordersRef, orderBody);
      //
      dispatch(setLoading(false));
      showMessage({ type: "success", message: "Order Placed successfully" });
      navigation.goBack();
      dispatch(emptyCart());
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      showMessage({ type: "danger", message: "Something wnt wrong" });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <LoadingDailog visible={isLoading} />

      <View style={{ paddingHorizontal: paddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            control={control}
            name="fullName"
            placeholder="Full Name"
          />
          <AppTextInputController
            control={control}
            name="mobile"
            placeholder="Phone Number"
          />
          <AppTextInputController
            control={control}
            name="address"
            placeholder="Detailed Address"
          />
        </View>
      </View>

      <View
        style={[
          styles.bottomButtonContainer,

          { paddingBottom: insets.bottom || vs(15) },
        ]}
      >
        <AppButtons title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColor.white,
    marginTop: vs(15),
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: paddingHorizontal,
    width: "100%",
    bottom: IS_ANDROID ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColor.lightGray,
    paddingTop: vs(10),
    // paddingBottom: insets.bottom || vs(15),
  },
});
