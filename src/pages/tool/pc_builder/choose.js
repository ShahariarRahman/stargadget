import RootLayout from "@/components/Layouts/RootLayout";
import FilterLayout from "@/components/Layouts/FilterLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import { config } from "@/config";

export default function ChooseComponentPage({ products, category }) {
  return (
    products?.length > 0 && (
      <div className="mt-2 min-h-full">
        {products.length}
        {category}
      </div>
    )
  );
}

ChooseComponentPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "PC Builder",
      path: "tool/pc_builder",
    },
    {
      title: "Choose A CPU",
      path: "tool/pc_builder/choose",
    },
  ];

  return (
    <RootLayout
      title="PC Builder - Build Your Own Computer - Star Gadget"
      description="Choose CPU to Build the dream PC from Star Tech. Have the best quoted price for every desktop parts. Shop online or visit our shops."
    >
      <BreadcrumbLayout navItems={items} container>
        <FilterLayout>{page}</FilterLayout>
      </BreadcrumbLayout>
    </RootLayout>
  );
};

export async function getServerSideProps(context) {
  const { productCategory } = context.query;
  const res = await fetch(`${config.apiBaseUrl}/products/${productCategory}`);
  const data = await res.json();

  const props = {
    products: data?.data || [],
  };

  if (productCategory) {
    props.category = productCategory;
  }

  return {
    props,
  };
}
