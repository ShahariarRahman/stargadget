import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";

export default function LoginPage() {
  return (
    <div>
      <h4 className="mb-5 text-xl text-secondary">Account Login</h4>
    </div>
  );
}

LoginPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "Account",
      path: "account/login",
    },
    {
      title: "Login",
      path: "account/login",
    },
  ];

  return (
    <RootLayout title="Account Login">
      <BreadcrumbLayout navItems={items}>{page}</BreadcrumbLayout>
    </RootLayout>
  );
};
