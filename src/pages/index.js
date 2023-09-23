import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/home/Banner";
import ActivityMarquee from "@/components/UI/home/ActivityMarquee";
import { format } from "date-fns";

export default function HomePage({ date }) {
  return (
    <div className="lg:text-base md:leading-6 lg:leading-9">
      <Banner />
      <ActivityMarquee date={date} />
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

export async function getStaticProps() {
  return {
    props: {
      date: format(new Date(), "do MMMM iiii"),
    },
  };
}
