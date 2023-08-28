import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import { getCategories } from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";

export const revalidate = 0;

async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex px-4 sm:px-6 lg:px-8 h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;