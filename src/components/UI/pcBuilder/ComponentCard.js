import Link from "next/link";
import Image from "next/legacy/image";
import { Button } from "antd";
import { CloseOutlined, RedoOutlined } from "@ant-design/icons";

export default function BuilderComponentCard({ component }) {
  const {
    category,
    categoryImg,
    categoryName,
    required,
    image_url, // product
    product_code, // product
    product_name, // product
    price, // product
  } = component;

  return (
    <div className="flex px-2.5 py-3 border-b gap-2">
      <div className="flex space-x-1.5 sm:space-x-5  w-full">
        {product_code ? (
          <div className="w-16 min-w-[4rem] mr-2">
            <Image
              height={100}
              width={100}
              layout="responsive"
              placeholder="blur"
              blurDataURL={image_url}
              src={image_url}
              alt={product_name}
            />
          </div>
        ) : (
          <div className="p-4 bg-secondary/10 rounded">
            <div className="w-10">
              <Image
                style={{
                  filter:
                    "invert(23%) sepia(88%) saturate(1707%) hue-rotate(219deg) brightness(88%) contrast(120%)",
                }}
                height={100}
                width={100}
                layout="responsive"
                placeholder="blur"
                blurDataURL={categoryImg}
                src={categoryImg}
                alt={categoryName}
              />
            </div>
          </div>
        )}
        <div className="min-h-[4rem] w-full flex flex-col justify-center space-y-2.5">
          <div className="text-xs">
            <span
              className={`font-semibold ${
                product_code ? "text-secondary" : "text-dim"
              }`}
            >
              {categoryName}
            </span>
            {required && (
              <span className="hidden xl:inline-block ml-1.5 bg-dark/50 text-white rounded-sm px-[2px]">
                Required
              </span>
            )}
          </div>
          {product_code ? (
            <p>{product_name}</p>
          ) : (
            <div className="bg-dark/5 max-w-4xl w-2/3 h-4"></div>
          )}
        </div>
      </div>
      <div className="w-1/4 flex flex-col-reverse xl:flex-row items-center justify-center gap-4 xl:gap-6">
        {product_code ? (
          <div className="w-full">
            <p className=" h-4 text-right font-semibold">
              {Number(price).toLocaleString()}৳
            </p>
          </div>
        ) : (
          <div className="hidden xl:flex items-center w-full">
            <p className="bg-dark/5 w-full h-4"></p>
          </div>
        )}
        <hr className="border-l h-12 hidden xl:block" />
        {product_code ? (
          <div className="flex justify-end xl:justify-center w-full xl:min-w-[7rem] text-center text-dark/75">
            <CloseOutlined className="text-lg xl:text-xl hover:text-primary cursor-pointer p-1.5" />
            <RedoOutlined className="text-lg xl:text-xl hover:text-primary cursor-pointer p-1.5" />
          </div>
        ) : (
          <div className="w-full flex justify-end">
            <Link href={`pc_builder/choose?category=${category}`}>
              <Button
                type="default"
                size="large"
                className="!text-sm font-semibold border-2 !border-secondary !text-secondary hover:bg-secondary hover:!text-white !rounded w-fit sm:min-w-[7rem] !h-12"
              >
                Choose
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
