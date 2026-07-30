export interface OrdersItemProps {
  price: number;
  totalPrice: number;
  date: string;
  dueDate: string;
  id: string;
  fullName: string;
  mobile: string;
  address: string;
  createdAt: any; // Firestore Timestamp hai — baad mein fix karenge
  getTotalAmount: number;
  getGrandTotal: number;
}
