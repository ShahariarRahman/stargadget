import { useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import PCBuilderHeading from "@/components/UI/pcBuilder/PCBuilderHeading";
import PCBuilderDashboard from "@/components/UI/pcBuilder/PCBuilderDashboard";
import ComponentSection from "@/components/UI/pcBuilder/ComponentSection";
import { componentItems } from "@/utils/constant/componentItems";
import { config } from "@/config";

export default function PcBuilderPage({
  products,
  totalProduct,
  totalPrice,
  email,
}) {
  const [hideUnconfigured, setHideUnconfigured] = useState(false);

  return (
    <div className="text-dark text-[15px] leading-4 bg-white mt-5 border border-secondary/20 border-b-0 xl:pb-8 xl:border-b">
      <PCBuilderHeading />
      <div className="border-secondary/20 border-t flex justify-center">
        <div className="w-full max-w-6xl">
          <PCBuilderDashboard
            email={email}
            products={products}
            totalPrice={totalPrice}
            totalProduct={totalProduct}
            hideUnconfigured={hideUnconfigured}
            setHideUnconfigured={setHideUnconfigured}
          />
          <ComponentSection
            title="Core Components"
            components={componentItems.core}
            hideUnconfigured={hideUnconfigured}
            products={products}
          />
        </div>
      </div>
    </div>
  );
}

PcBuilderPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "PC Builder",
      path: "tool/pc_builder",
    },
  ];
  return (
    <RootLayout
      title="PC Builder - Build Your Own Computer - Star Gadget"
      description="Build Your Custom AMD Ryzen or Intel Gaming PC from Star Gadget PC Builder. Visit Star Gadget shop or Order Online to get delivery Anywhere in BD"
    >
      <BreadcrumbLayout navItems={items} container>
        {page}
      </BreadcrumbLayout>
    </RootLayout>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const email = session?.user?.email;

  const productsRes = await fetch(`${config.apiBaseUrl}/pc_builder/${email}`);
  const { data } = await productsRes.json();

  const products = data?.products || [];
  const totalProduct = data?.totalProduct || 0;
  const totalPrice = data?.totalPrice || 0;

  return {
    props: {
      email,
      products,
      totalProduct,
      totalPrice,
    },
  };
}
