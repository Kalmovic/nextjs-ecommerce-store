import { ProductType } from "@/types";
import React from "react";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

type ProductListProps = {
  title: string;
  products: ProductType[];
};

function ProductList({ title, products }: ProductListProps) {
  return (
    <div className="gap-y-4">
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default ProductList;
