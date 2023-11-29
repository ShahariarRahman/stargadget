import Link from "next/link";
import Image from "next/legacy/image";
import { Badge, Rate } from "antd";

export default function HomeProductCard({ product }) {
  const {
    product_name,
    price,
    category,
    image_url,
    rating,
    product_code,
    status,
  } = product;
  return (
    <Badge.Ribbon
      color={status ? "green" : "red"}
      text={status ? "In Stock" : "Out Of Stock"}
      placement="start"
    >
      <div className="h-full shadow-sm hover:shadow-md py-4 rounded-md flex flex-col justify-between bg-white tracking-tight text-[15px]">
        <Link
          href={`/product/${product_code}`}
          className="p-5 flex justify-center"
        >
          <div className="w-full max-w-[13rem]">
            <Image
              height={210}
              width={210}
              blurDataURL={image_url}
              placeholder="blur"
              className="hover:opacity-90 cursor-pointer"
              layout="responsive"
              src={image_url}
              alt={product_name}
            />
          </div>
        </Link>
        <div className="text-left text-black h-full flex flex-col justify-between">
          <Link
            href={`/product/${product_code}`}
            className="border-t-2 border-dim/5 pt-2 hover:underline hover:text-primary cursor-pointer leading-5 block duration-0 px-3.5"
          >
            {product_name?.length > 85
              ? product_name?.slice(0, 85) + "..."
              : product_name}
          </Link>
          <Link
            href={`/${category}`}
            className="hover:underline hover:text-primary text-dim/90 capitalize duration-0 px-3.5 py-1.5 hidden xs:block"
          >
            {category.split("-").join(" ")}
          </Link>
          <div className="xs:border-t-2 border-dim/5 pt-2.5">
            <div className="flex flex-wrap justify-between items-center px-3.5">
              <p className="text-primary text-base font-semibold">
                {Number(price).toLocaleString()}&#2547;
              </p>
              <Rate
                className="text-sm lg:text-base [&>li]:!mr-[.14rem] hidden xs:inline"
                disabled
                defaultValue={rating}
                allowHalf
              />
            </div>
          </div>
        </div>
      </div>
    </Badge.Ribbon>
  );
}
