import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import ContainerLayout from "@/components/Layouts/ContainerLayout";
import ShareOption from "@/components/UI/product/ShareOption";
import ProductImages from "@/components/UI/product/ProductImages";
import InfoBadges from "@/components/UI/product/InfoBadges";
import KeyFeatures from "@/components/UI/product/KeyFeatures";
import ViewMoreOption from "@/components/UI/product/ViewMoreOption";
import PriceOptions from "@/components/UI/product/PriceOptions";
import CartOption from "@/components/UI/product/CartOption";
import ProductInfoNav from "@/components/UI/product/ProductInfoNav";
import ProductSpecification from "@/components/UI/product/ProductSpecification";
import ProductDescription from "@/components/UI/product/ProductDescription";
import PriceInformation from "@/components/UI/product/PriceInformation";
import ProductQuestions from "@/components/UI/product/ProductQuestions";
import ProductReviews from "@/components/UI/product/ProductReviews";
import RelatedProducts from "@/components/UI/product/RelatedProducts";
import { config } from "@/config";
import { navItems } from "@/utils/constant/navItems";
import { helpers } from "@/utils/helpers";

export default function ProductPage({ product, relatedProducts }) {
  const {
    image_url,
    product_name,
    price,
    regular_price,
    status,
    product_code,
    brand,
    features,
    rating,
    reviews,
    specification,
    descriptions,
    price_info,
    questions,
    // category,
  } = product || {};

  return (
    <div className="text-dark text-sm lg:text-[15px] lg:leading-6">
      <ContainerLayout
        container
        className="pb-8 md:px-0 lg:px-5 bg-white rounded shadow-sm"
      >
        <ShareOption />
        <div className="flex md:flex-row flex-col justify-around gap-8 lg:gap-16">
          <ProductImages image_url={image_url} product_name={product_name} />
          <article>
            <h2 className="pb-3 text-xl lg:text-[22px] text-secondary">
              {product_name}
            </h2>
            <InfoBadges
              price={price}
              regular_price={regular_price}
              status={status}
              product_code={product_code}
              brand={brand}
            />
            <KeyFeatures features={features} />
            <ViewMoreOption rating={rating} />
            <PriceOptions price={price} regular_price={regular_price} />
            <CartOption />
          </article>
        </div>
      </ContainerLayout>
      <ContainerLayout container>
        <section className="lg:grid grid-cols-4 gap-5">
          <div className="col-span-3 space-y-5 mt-5">
            <ProductInfoNav questions={questions} reviews={reviews} />
            <ProductSpecification specification={specification} />
            <ProductDescription descriptions={descriptions} />
            <PriceInformation price_info={price_info} />
            <ProductQuestions />
            <ProductReviews reviews={reviews} />
          </div>
          <aside className="col-span-1 space-y-5 mt-5">
            <RelatedProducts products={relatedProducts} />
          </aside>
        </section>
      </ContainerLayout>
    </div>
  );
}

ProductPage.getLayout = function getLayout(page) {
  const { product } = page.props;

  let breadcrumbItemsWithProduct = [];
  let content = {};

  const { category, brand, product_name, product_code, price_info } =
    product || {};

  if (product_code) {
    const parentAtEndpoint = helpers.findParentAtEndpoint(navItems, [
      category.toLowerCase(),
      brand.toLowerCase(),
    ]);

    const { description, title, children, breadcrumbItems } = parentAtEndpoint;

    breadcrumbItemsWithProduct = [
      ...(breadcrumbItems || []),
      {
        title: product_name,
        path: `product/${product_code}`,
      },
    ];

    content = {
      buttons: children,
      title,
      description,
    };
  }

  return (
    <RootLayout title={product_name} description={price_info?.details}>
      <BreadcrumbLayout
        space="none"
        navItems={breadcrumbItemsWithProduct}
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
  let relatedProducts = [];

  const prodRes = await fetch(`${apiBaseUrl}/product/${product_code}`);
  const prodData = await prodRes.json();

  if (prodData?.data) {
    product = prodData.data;
    const category = product.category;

    const relatedProdRes = await fetch(`${apiBaseUrl}/products/${category}`);
    const relatedProdData = await relatedProdRes.json();

    if (relatedProdData?.data?.length) {
      relatedProducts = relatedProdData.data.filter(
        (rProd) => rProd.product_code !== product.product_code
      );
    }
  }

  return {
    props: {
      product,
      relatedProducts,
    },
    revalidate: 3600, // rebuild in 60 min
  };
}
