import { ProductType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<ProductType> => {
  const response = await fetch(`${URL}/${id}`);
  const data = response.json();

  return data;
};
