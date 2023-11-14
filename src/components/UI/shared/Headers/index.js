import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MainNav from "@/components/UI/shared/Headers/MainNav";
import CategoryNav from "@/components/UI/shared/Headers/CategoryNav";
import FooterNav from "@/components/UI/shared/Headers/FooterNav";
import FloatingNav from "@/components/UI/shared/Headers/FloatingNav";
import Cart from "@/components/UI/shared/Cart";
import { headerNavItems } from "@/utils/constant/navItems";

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
  const { data } = useSession();

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
        user={data?.user}
      />
      <CategoryNav categoryNavItems={categoryNavItems} />
      <FooterNav />
      <FloatingNav setOpen={setOpen} />
      <Cart open={open} setOpen={setOpen} />
    </>
  );
}
