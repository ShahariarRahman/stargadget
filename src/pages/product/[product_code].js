import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import { config } from "@/config";

export default function ProductPage({ product }) {
  return <div>Product Page: {product}</div>;
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

export async function getStaticPaths() {
  const productsRes = await fetch(`${config.apiBaseUrl}/products`);
  const productsData = await productsRes.json();

  const paths = productsData.data.map((product) => ({
    params: { product_code: product.product_code }, // must be string
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { product_code } = context.params;

  return {
    props: {
      product: product_code,
    },
    revalidate: 3600, // rebuild in 60 min
  };
}
