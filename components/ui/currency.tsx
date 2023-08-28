"use client";
import { priceFormatter } from "@/lib/utils";
import React from "react";

type CurrencyProps = {
  amount: string | number;
};

function Currency({ amount }: CurrencyProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="font-semibold">{priceFormatter.format(Number(amount))}</div>
  );
}

export default Currency;
