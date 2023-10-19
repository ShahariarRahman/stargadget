import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import FilterLayout from "@/components/Layouts/FilterLayout";
import { navItems } from "@/utils/constant/navItems";
import { helpers } from "@/utils/helpers";
import { config } from "@/config";

export default function CategoryPage({ products }) {
  console.log(products);
  return <div>CategoryPage</div>;
}

CategoryPage.getLayout = function getLayout(page) {
  const { category } = page.props;
  const parentAtEndpoint = helpers.findParentAtEndpoint(navItems, category);
  const { description, title, children, breadcrumbItems } = parentAtEndpoint;

  const content = {
    buttons: children,
    title,
    description,
  };

  return (
    <RootLayout title={title} description={description}>
      <BreadcrumbLayout container content={content} navItems={breadcrumbItems}>
        <FilterLayout>{page}</FilterLayout>
      </BreadcrumbLayout>
    </RootLayout>
  );
};

export const getStaticPaths = () => {
  const flattenPaths = helpers.getFlattenPath(navItems);
  const paths = flattenPaths.map((category) => ({
    params: {
      category,
      // category: "abc"          // par/[category]    | par/abc
      // category: ["abc","def"]  // par/[...category] | par/abc/def
    },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { category } = context.params;
  const [categoryPath, brandPath] = category;

  const url = `${config.apiBaseUrl}/products/${categoryPath}`;

  const res = await fetch(brandPath ? `${url}/${brandPath}` : url);
  const data = await res.json();

  return {
    props: {
      products: data?.data || [],
      category,
    },
  };
}
