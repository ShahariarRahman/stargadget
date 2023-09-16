import { Row, Col, Input, Button, Layout } from "antd";
import {
  UserOutlined,
  GiftOutlined,
  ThunderboltFilled,
  SearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/legacy/image";
import logo from "@/assets/images/logo.png";
import ContainerLayout from "@/components/Layouts/ContainerLayout";

export default function MainNav() {
  const mainNavData = [
    <Link key="offer" href="/offer" className="inline-flex">
      <GiftOutlined className="!text-[1.4rem] text-primary" />
      <div className="ml-3 text-left flex flex-col">
        <h3 className="text-base">Offers</h3>
        <span className="text-[11px] text-white/50">Latest Offers</span>
      </div>
    </Link>,
    <Link key="deals" href="/deals" className="inline-flex">
      <ThunderboltFilled className="!text-[1.4rem] text-primary animate-blinker" />
      <div className="ml-3 text-left flex flex-col">
        <h3 className="text-base">Desktop Deal</h3>
        <span className="text-[11px] text-white/50">Special Deals</span>
      </div>
    </Link>,
    <div key="login" className="inline-flex items-center">
      <Link href="/account/login">
        <UserOutlined className="!text-[1.4rem] text-primary" />
      </Link>
      <div className="ml-3 text-left">
        <Link href="/account/login">
          <h3 className="!text-white text-base">Account</h3>
        </Link>
        <span className="flex space-x-1 text-[11px] text-white/50">
          <Link
            href="/account/register"
            className="hover:!text-primary !duration-0"
          >
            Register
          </Link>
          <span>or</span>
          <Link
            href="/account/login"
            className="hover:!text-primary !duration-0"
          >
            Login
          </Link>
        </span>
      </div>
    </div>,
  ];

  return (
    <Layout.Header className="w-full bg-main sticky xl:static top-0 z-50 shadow p-0  h-full !leading-none">
      <ContainerLayout container className="hidden xl:flex py-3.5">
        <Row wrap={false} justify="space-between" align="middle">
          <Col className="flex items-center w-full">
            <Link
              className="flex justify-start items-center mb-2 mr-2"
              href="/"
            >
              <div className="w-28">
                <Image
                  placeholder="blur"
                  layout="responsive"
                  src={logo}
                  alt="logo"
                />
              </div>
            </Link>
            <Input
              className="ml-12 mr-7 !bg-white rounded w-full h-[42px] flex items-center"
              placeholder="Search"
              allowClear
              bordered={false}
              size="large"
              suffix={
                <button className="text-xl text-black">
                  <SearchOutlined />
                </button>
              }
            />
          </Col>
          <Col className="flex items-center">
            {mainNavData.map((content) => (
              <Button
                key={content.key}
                size="large"
                className=" text-white hover:!text-white text-sm leading-snug border-none  !py-0 px-2.5"
                type="link"
              >
                {content}
              </Button>
            ))}
            <a href="https://stargadget.vercel.app/tool/pc_builder">
              <Button className="ml-5 !rounded bg-new-gradient bg-[400%,400%] animate-gradient border-0 h-[42px] !text-white font-semibold py-2 px-5">
                PC Builder
              </Button>
            </a>
          </Col>
        </Row>
      </ContainerLayout>
    </Layout.Header>
  );
}
