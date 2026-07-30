import { collection, doc, getDocs } from "firebase/firestore";
import { auth, firestore } from "./firebaseConfig";
import { ProductProps } from "../types/productType";
import { useSelector } from "react-redux";
import { RootState, store } from "../store/store";
import { OrderProps } from "../components/orders/OrdersCard";
import { OrdersItemProps } from "../types/orderType";

export const getProductsData = async (): Promise<ProductProps[]> => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "products"));
    const productList: ProductProps[] = querySnapshot.docs.map((doc) => ({
      id: Number(doc.id), // document ID
      ...(doc.data() as Omit<ProductProps, "id">), // baaki saare fields
    }));
    return productList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchOrders = async (): Promise<OrdersItemProps[]> => {
  try {
    const userIDFromRedux = store.getState().userSlice.userData.uid;
    const userIDFromFirebase = auth.currentUser?.uid;
    const userOrderRef = collection(
      doc(firestore, "users", userIDFromFirebase),
      "orders",
    );

    const querySnapshot = await getDocs(userOrderRef);
    const ordersList: OrdersItemProps[] = querySnapshot.docs.map((doc) => ({
      id: doc.id, // string rakho, Number() mat karo
      ...(doc.data() as Omit<OrdersItemProps, "id">),
    }));

    return ordersList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
