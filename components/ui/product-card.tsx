"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";

type ProductCardProps = {
  product: ProductType;
};

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };
  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(product);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* imgs and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product.images?.[0]?.url}
          alt={product.name}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex justify-between items-center">
        <Currency amount={product.price} />
      </div>
    </div>
  );
}

export default ProductCard;
