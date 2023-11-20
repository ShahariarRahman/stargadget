import { useState } from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import PCBuilderHeading from "@/components/UI/pcBuilder/PCBuilderHeading";
import PCBuilderDashboard from "@/components/UI/pcBuilder/PCBuilderDashboard";
import ComponentSection from "@/components/UI/pcBuilder/ComponentSection";
import { componentItems } from "@/utils/constant/componentItems";

export default function PcBuilder() {
  const [hideUnconsidered, setHideUnconsidered] = useState(false);

  return (
    <div className="text-dark text-[15px] leading-4 bg-white mt-5 border border-secondary/20 border-b-0 xl:pb-8 xl:border-b">
      <PCBuilderHeading />
      <div className="border-secondary/20 border-t flex justify-center">
        <div className="w-full max-w-6xl">
          <PCBuilderDashboard
            setHideUnconsidered={setHideUnconsidered}
            hideUnconsidered={hideUnconsidered}
          />
          <ComponentSection
            title="Core Components"
            components={componentItems.core}
            hideUnconsidered={hideUnconsidered}
          />
        </div>
      </div>
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
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
