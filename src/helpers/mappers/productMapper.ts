import { ProductProps } from "../../types/productType";

export const mapProduct = (raw: any): ProductProps => ({
  id: raw.prod_id,
  title: raw.prod_nm,
  price: raw.amt,
  imageURL: raw.img_url,
});

export const mapProducts = (rawList: any[]): ProductProps[] =>
  rawList.map(mapProduct);
