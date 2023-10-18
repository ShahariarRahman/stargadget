import {
  GiftOutlined,
  ThunderboltFilled,
  DesktopOutlined,
  PlusSquareFilled,
} from "@ant-design/icons";
import Link from "next/link";
import Compare from "@/components/UI/shared/Compare";

export default function FooterNav() {
  const footerNavItems = [
    <Link
      href="/offer"
      key="offer"
      className="flex flex-col items-center hover:text-inherit"
    >
      <GiftOutlined className="text-lg" />
      <small className="text-[10px] opacity-50 mt-1">Offers</small>
    </Link>,
    <Link
      href="/deals"
      key="deals"
      className="flex flex-col items-center hover:text-inherit"
    >
      <ThunderboltFilled className="text-lg animate-blinker" />
      <small className="text-[10px] opacity-50 mt-1">Mobile Deal</small>
    </Link>,
    <Link
      href="/tool/pc_builder"
      key="pc-builder"
      className="flex flex-col items-center hover:text-inherit"
    >
      <DesktopOutlined className="text-lg" />
      <small className="text-[10px] opacity-50 mt-1">PC Builder</small>
    </Link>,
    <Compare key="compare">
      <div className="flex flex-col items-center hover:text-inherit">
        <PlusSquareFilled className="text-lg" />
        <small className="text-[10px] opacity-50 mt-1">Compare (0)</small>
      </div>
    </Compare>,
  ];

  return (
    <div className="bg-main px-3 fixed bottom-0 h-[61px] flex justify-around items-center xl:hidden text-white z-50 w-full border-white/10 border-t">
      {footerNavItems.map((content) => content)}
    </div>
  );
}
