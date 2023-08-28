import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

async function HomePage() {
  const products = await getProducts({
    isFeatured: "true",
  });
  // Fixed billboard id that we want to display on the homepage
  const billboard = await getBillboard("0e37f161-f7f4-42b7-b1a6-3dac65e74e3b");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
