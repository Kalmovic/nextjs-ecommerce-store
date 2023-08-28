"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CategoryType } from "@/types";

type MainNavProps = {
  data: CategoryType[];
};

function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();
  const routes = data.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="ml-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black " : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
