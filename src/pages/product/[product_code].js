import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import { config } from "@/config";

export default function ProductPage({ product }) {
  return (
    <div className="text-center">
      <h1 className="text-xl">Product Page:</h1>
      <h3 className="text-lg">Product: {product.product_name}</h3>
    </div>
  );
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
  const { apiBaseUrl } = config;

  let product = {};

  const prodRes = await fetch(`${apiBaseUrl}/product/${product_code}`);
  const prodData = await prodRes.json();

  if (prodData?.data) {
    product = prodData.data;
  }

  return {
    props: {
      product,
    },
    revalidate: 3600, // rebuild in 60 min
  };
}
