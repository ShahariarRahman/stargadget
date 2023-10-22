import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";

export default function ProductPage() {
  return <div>Product Page</div>;
}

ProductPage.getLayout = function getLayout(page) {
  const product_name = "product_name";
  const description = "description";
  const breadcrumbItems = [
    {
      title: product_name,
      path: product_name,
    },
  ];
  const content = {};

  return (
    <RootLayout title={product_name} description={description}>
      <BreadcrumbLayout
        space="none"
        navItems={breadcrumbItems}
        content={content}
      >
        {page}
      </BreadcrumbLayout>
    </RootLayout>
  );
};
