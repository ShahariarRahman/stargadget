import { Badge, Rate } from "antd";
import Image from "next/legacy/image";
import Link from "next/link";

export default function FeaturedProductCard({ product }) {
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
              quality={50}
              height={200}
              width={200}
              blurDataURL={image_url}
              placeholder="blur"
              className="hover:opacity-90 cursor-pointer"
              layout="responsive"
              src={image_url}
              alt={product_name}
            />
          </div>
        </Link>
        <div className="text-left text-black h-full flex flex-col justify-between px-3.5">
          <Link
            href={`/product/${product_code}`}
            className="border-t-2 border-dim/5 pt-2 hover:underline hover:text-primary cursor-pointer leading-5 block duration-0"
          >
            {product_name?.length > 85
              ? product_name?.slice(0, 85) + "..."
              : product_name}
          </Link>

          <div className="py-1">
            <Link
              href={`/${category}`}
              className="hover:underline hover:text-primary py-1 border-b-2 border-dim/5 text-dim/90 capitalize duration-0 block"
            >
              {category.split("-").join(" ")}
            </Link>
          </div>
          <div className="pt-1">
            <p className=" text-secondary/70 uppercase text-xs font-semibold tracking-tight"></p>
            <div className="mt-1.5 flex flex-wrap justify-between items-center">
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
