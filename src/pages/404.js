import Link from "next/link";
import { Button, Result } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import useTimer from "@/hooks/useTimer";

export default function NotFoundPage() {
  const [timer] = useTimer(10);

  return (
    <div className="flex justify-center">
      <Result
        status="404"
        title="Page Not Found"
        subTitle={
          <span>
            Sorry, the page you visited does not exist. or Under Construction.{" "}
            <span className="text-primary underline">
              redirecting to home in {timer} seconds
            </span>
          </span>
        }
        extra={
          <Link href="/">
            <Button type="default">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}

NotFoundPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "The page you requested cannot be found!",
      path: "404",
    },
  ];
  return (
    <RootLayout title="The page you requested cannot be found!">
      <BreadcrumbLayout navItems={items} container>
        {page}
      </BreadcrumbLayout>
    </RootLayout>
  );
};
