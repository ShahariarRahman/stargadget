import { headerNavItems } from "@/utils/constant/navItems";
import { useState } from "react";
import MainNav from "./MainNav";
import Link from "next/link";
import CategoryNav from "./CategoryNav";

const generateCategoryNav = (data, parentPath = "") =>
  data.map(({ navPath, navLabel, children }) => ({
    key: parentPath + navPath,
    label: (
      <Link className="py-3" href={`${parentPath}/${navPath}`}>
        {navLabel}
      </Link>
    ),
    ...(children && {
      children: generateCategoryNav(children, `${parentPath}/${navPath}`),
    }),
  }));

export default function Headers() {
  const categoryNavItems = generateCategoryNav(headerNavItems);

  const [open, setOpen] = useState({
    menu: false,
    search: false,
    cart: false,
  });

  return (
    <>
      <MainNav
        categoryNavItems={categoryNavItems}
        open={open}
        setOpen={setOpen}
      />
      <CategoryNav categoryNavItems={categoryNavItems} />
    </>
  );
}
