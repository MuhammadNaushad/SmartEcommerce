import { Timestamp } from "firebase/firestore";

export const formatTimestamp = (timestamp: any): string => {
  if (!timestamp) return "N/A";

  const date =
    timestamp instanceof Timestamp ? timestamp.toDate() : new Date(timestamp);

  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
};
