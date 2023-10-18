import Link from "next/link";
import { Breadcrumb, Button, Grid } from "antd";
import { HomeFilled } from "@ant-design/icons";
import ContainerLayout from "@/components/Layouts/ContainerLayout";

export default function BreadcrumbLayout({
  children,
  navItems,
  content,
  container,
  space,
}) {
  const { xs } = Grid.useBreakpoint();

  const BreadcrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeFilled />
        </Link>
      ),
    },
  ];

  navItems?.length &&
    navItems.forEach(({ title, path }) => {
      BreadcrumbItems.push({
        title: (
          <Link className={`hover:underline`} href={`/${path}`}>
            {title}
          </Link>
        ),
      });
    });

  return (
    <div>
      <ContainerLayout container className="py-5 bg-white shadow-sm">
        <div>
          <Breadcrumb
            className="[&>ol>li>span>a]:hover:!bg-inherit capitalize"
            items={BreadcrumbItems}
          />
          {content && (
            <div className="pb-2">
              {content.title && (
                <h1 className="text-secondary text-lg md:text-[22px] font-[500] pt-3.5">
                  {content.title}
                </h1>
              )}
              {content.description && (
                <p className="pt-1 md:pt-1.5 text-dark/90 tracking-tight">
                  {content.description}
                </p>
              )}
              {content.buttons?.length && (
                <div className="flex flex-wrap gap-2 pt-3.5">
                  {content.buttons.map(({ navPath, navLabel }, index) => (
                    <Link key={index} href={navPath}>
                      <Button
                        size={xs ? "small" : "middle"}
                        shape="round"
                        className=" hover:bg-secondary hover:!border-secondary hover:!text-white text-dark"
                      >
                        {navLabel}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </ContainerLayout>
      <ContainerLayout space={space} container={container}>
        {children}
      </ContainerLayout>
    </div>
  );
}
