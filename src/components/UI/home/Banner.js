import { Button, Carousel, Col, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Images } from "@/utils/images";
import Image from "next/legacy/image";
import { underDevNotification } from "@/utils/underDev";
import { carouselItems } from "@/utils/constant/carouselItems";
import Link from "next/link";
const { Option } = Select;

const ViewComparisonDemoOption = () => (
  <Select
    bordered={false}
    size="large"
    className="w-full !rounded shadow bg-white"
    showSearch
    suffixIcon={
      <button>
        <SearchOutlined className="text-dim/80 text-lg" />
      </button>
    }
    placeholder="Search and Select Product"
  >
    {[...Array(5)].map((_, index) => (
      <Option key={index} value={`demo-${index + 1}`}>
        Product demo : {index + 1}
      </Option>
    ))}
  </Select>
);

export default function Banner() {
  return (
    <Row gutter={20} justify="space-between">
      <Col className="mt-5 w-full" lg={18}>
        <Carousel autoplay effect="fade">
          {carouselItems.map(({ image, name }) => (
            <div key={name}>
              <Image
                placeholder="blur"
                blurDataURL={image}
                layout="responsive"
                alt={name}
                src={image}
              />
            </div>
          ))}
        </Carousel>
      </Col>
      <Col className="flex flex-col justify-between w-full mt-5" lg={6}>
        <div className="flex flex-col items-center justify-center bg-[#ffe8a1] py-[25px] px-7 gap-4 h-full">
          <div className="text-center leading-7">
            <h4 className="font-semibold text-[1rem]">Compare Products</h4>
            <p className="text-dim text-sm opacity-70 hidden xl:flex mt-1">
              Choose Two Products to Compare
            </p>
          </div>
          <ViewComparisonDemoOption />
          <ViewComparisonDemoOption />
          <Button
            onClick={underDevNotification}
            size="large"
            className="whitespace-normal w-full !rounded font-semibold border-2 !text-secondary !border-secondary hover:!bg-secondary hover:!text-white hover:!border-secondary !text-[15px]"
            type="primary"
            ghost
          >
            View Comparison
          </Button>
        </div>
        <Link href="/desktop" className="mt-5">
          <Image
            placeholder="blur"
            blurDataURL={Images.banner.budgetDesktop}
            layout="responsive"
            src={Images.banner.budgetDesktop}
            alt="budget-desktop"
          />
        </Link>
      </Col>
    </Row>
  );
}
