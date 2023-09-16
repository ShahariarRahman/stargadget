import { Menu } from "antd";
import ContainerLayout from "@/components/Layouts/ContainerLayout";

export default function CategoryNav({ categoryNavItems }) {
  return (
    <ContainerLayout
      container
      className="sticky top-0 z-50 bg-white hidden xl:flex shadow"
    >
      <Menu
        className="[&>li>*]:!mr-3 !font-semibold"
        mode="horizontal"
        items={categoryNavItems}
      />
    </ContainerLayout>
  );
}
