import RootLayout from "@/components/Layouts/RootLayout";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl h-96 bg-secondary">HomePage</h1>
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
