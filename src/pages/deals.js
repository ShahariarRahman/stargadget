import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import UnderConstruction from "@/components/UI/UnderConstruction";

export default function DealsPage() {
  return <UnderConstruction />;
}

DealsPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "The page you requested is under construction!",
      path: "deals",
    },
  ];
  return (
    <RootLayout
      title="Laptop Desktop Special Deal"
      description="Find Star Gadget Laptop Desktop Special Deals"
    >
      <BreadcrumbLayout navItems={items} container>
        {page}
      </BreadcrumbLayout>
    </RootLayout>
  );
};
