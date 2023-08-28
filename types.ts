export type BillboardType = {
  id: string;
  label: string;
  imageUrl: string;
};

export type CategoryType = {
  id: string;
  name: string;
  imageUrl: string;
  billboard: BillboardType;
};

export type ProductType = {
  id: string;
  name: string;
  category: CategoryType;
  price: string;
  isFeatured: boolean;
  size: SizeType;
  color: ColorType;
  images: Image[];
};

export type SizeType = {
  id: string;
  name: string;
  value: string;
};

export type ColorType = {
  id: string;
  name: string;
  value: string;
};

export type Image = {
  id: string;
  url: string;
};
