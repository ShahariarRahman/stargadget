import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import { navItems } from "@/utils/constant/navItems";
import { helpers } from "@/utils/helpers";

export default function CategoryPage() {
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
        {page}
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
  console.log({ categoryPath }, { brandPath });

  return {
    props: {
      category,
    },
  };
}
