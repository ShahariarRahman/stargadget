import Link from "next/link";
import Image from "next/legacy/image";
import { Avatar, Tooltip } from "antd";
import {
  GiftOutlined,
  ThunderboltFilled,
  DesktopOutlined,
  PlusSquareFilled,
  UserOutlined,
} from "@ant-design/icons";
import Compare from "../Compare";

const renderAccountSection = (user) => {
  return user ? (
    <div key="login" className="flex flex-col items-center hover:text-inherit">
      <Avatar
        size="small"
        shape="circle"
        src={
          <Image width={50} height={50} src={user.image} alt="profile-image" />
        }
      />
      <Tooltip title={user.name}>
        <small className="text-[10px] opacity-50 mt-1">
          {user?.name?.length > 10 ? user.name.slice(0, 10) + "..." : user.name}
        </small>
      </Tooltip>
    </div>
  ) : (
    <Link
      href="/account/login"
      key="login"
      className="flex flex-col items-center hover:text-inherit"
    >
      <UserOutlined className="text-lg" />
      <small className="text-[10px] opacity-50 mt-1">Account</small>
    </Link>
  );
};

export default function FooterNav({ user }) {
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
    renderAccountSection(user),
  ];

  return (
    <div className="bg-main px-3 fixed bottom-0 h-[61px] flex justify-around items-center xl:hidden text-white z-50 w-full border-white/10 border-t">
      {footerNavItems.map((content) => content)}
    </div>
  );
}
