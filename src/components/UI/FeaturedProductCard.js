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
    features,
    brand,
    status,
  } = product;
  return (
    <Badge.Ribbon
      color={status ? "green" : "red"}
      text={status ? "In Stock" : "Out Of Stock"}
      placement="start"
    >
      <div className="h-full shadow-sm hover:shadow-md py-5 rounded-md flex flex-col justify-between bg-white">
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
        <p className="py-1 text-xs tracking-tight bg-dim/50 px-4 border-b">
          <span className="text-white/90 capitalize text-sm">
            {category.split("-").join(" ")} : &nbsp;
          </span>
          <Link
            href={`/${category}/${brand.toLowerCase()}`}
            className="text-yellow-200 font-semibold uppercase hover:text-secondary hover:underline duration-0"
          >
            {brand}
          </Link>
        </p>
        <div className="text-left text-black h-full flex flex-col justify-between px-4">
          <Link
            href={`/product/${product_code}`}
            className="pt-3 hover:underline hover:text-primary cursor-pointer leading-5 block duration-0 font-semibold"
          >
            {product_name?.length > 85
              ? product_name?.slice(0, 85) + "..."
              : product_name}
          </Link>
          <ul className="text-[13px] text-dim mt-3 pl-4 tracking-tight">
            {Object.entries(features)
              .slice(0, 4)
              .map(([title, value]) => (
                <li className="list-disc pb-1.5" key={title}>
                  {title}:&nbsp;{value}
                </li>
              ))}
          </ul>
          <div className="mt-2 pt-1 border-t">
            <p className=" text-secondary/70 uppercase text-xs font-semibold tracking-tight"></p>
            <div className="mt-1.5 flex flex-wrap justify-between items-center">
              <p className="text-primary text-base font-semibold">
                {Number(price).toLocaleString()}&#2547;
              </p>
              <Rate
                className="text-sm lg:text-base [&>li]:!mr-[.14rem] "
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
