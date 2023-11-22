import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import FilterLayout from "@/components/Layouts/FilterLayout";
import BuilderProductCard from "@/components/UI/BuilderProductCard";
import { config } from "@/config";

export default function ChooseComponentPage({ products }) {
  return (
    products?.length > 0 && (
      <div className="min-h-full">
        {products.map((product) => (
          <BuilderProductCard key={product.product_code} product={product} />
        ))}
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
  return {
    props: {
      products: data?.data || [],
    },
  };
}
