import { CategoryType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<CategoryType[]> => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};
