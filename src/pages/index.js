import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/home/Banner";
import ActivityMarquee from "@/components/UI/home/ActivityMarquee";
import FeaturedCategory from "@/components/UI/home/FeaturedCategory";
import FeaturedProduct from "@/components/UI/home/FeaturedProduct";
import SEOContent from "@/components/UI/home/SEOContent";
import { format } from "date-fns";
import { config } from "@/config";

export default function HomePage({ products, date }) {
  return (
    <div className="lg:text-base md:leading-6 lg:leading-9">
      <Banner />
      <ActivityMarquee date={date} />
      <FeaturedCategory />
      <FeaturedProduct products={products} />
      <SEOContent />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout
      space="middle"
      container
      title="Star Gadget - Leading Computer, Laptop Gadget Shop in Bangladesh"
      description="Star Gadget is the Best Laptop, Computer, Gaming PC, Component, Accessories, and Gadget retail &amp; Online shop in Bangladesh. Star Gadget offers the Latest Tech products with the most competitive price in BD."
    >
      {page}
    </RootLayout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${config.apiBaseUrl}/products`);
  const data = await res.json();
  return {
    props: {
      products: data?.data || [],
      date: format(new Date(), "do MMMM iiii"),
    },
  };
}
