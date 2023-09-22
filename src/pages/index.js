import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/home/Banner";

export default function HomePage() {
  return (
    <div className="lg:text-base md:leading-6 lg:leading-9">
      <Banner />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout space="middle" container>
      {page}
    </RootLayout>
  );
};
