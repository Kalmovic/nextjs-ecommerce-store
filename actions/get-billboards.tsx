import { BillboardType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboards = async (): Promise<BillboardType[]> => {
  const response = await fetch(URL);
  const data = response.json();

  return data;
};
