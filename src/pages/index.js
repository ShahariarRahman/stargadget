import RootLayout from "@/components/Layouts/RootLayout";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl">HomePage</h1>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
