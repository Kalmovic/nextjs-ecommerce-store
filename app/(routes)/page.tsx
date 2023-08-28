import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";
import { getBillboards } from "@/actions/get-billboards";

export const revalidate = 0;

async function HomePage() {
  const products = await getProducts({
    isFeatured: "true",
  });
  const billboards = await getBillboards();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards[0]} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
