import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import UnderConstruction from "@/components/UI/UnderConstruction";

export default function OfferPage() {
  return <UnderConstruction />;
}

OfferPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "The page you requested is under construction!",
      path: "offer",
    },
  ];
  return (
    <RootLayout
      title="Latest Star Gadget Offers"
      description="Find Star Gadget Deals and Promotion"
    >
      <BreadcrumbLayout navItems={items} container>
        {page}
      </BreadcrumbLayout>
    </RootLayout>
  );
};
