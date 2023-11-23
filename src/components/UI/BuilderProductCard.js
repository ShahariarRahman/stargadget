import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Button, Card, Rate } from "antd";
import { config } from "@/config";

export default function BuilderProductCard({ product }) {
  const { push } = useRouter();
  const session = useSession();

  const {
    product_code,
    image_url,
    product_name,
    category,
    price,
    status,
    rating,
    features,
    brand,
  } = product;

  const handleAddToPcBuilder = async (product_code) => {
    const res = await fetch(`${config.apiBaseUrl}/pc_builder/add`, {
      method: "PATCH",
      headers: {
        ContentType: "application/json",
      },
      body: JSON.stringify({
        email: session.data?.user.email,
        product_code,
      }),
    });
    const data = await res.json();

    if (data.success) {
      push("/tool/pc_builder");
    }
  };

  return (
    <Card bodyStyle={{ padding: 0 }} className="rounded-md mb-2">
      <div className="flex flex-col lg:flex-row items-center justify-between text-left px-4 gap-2">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <Link
            className="w-64 lg:w-44 p-2.5 pl-0"
            href={`/product/${product_code}`}
          >
            <Image
              className="hover:opacity-90 cursor-pointer"
              layout="responsive"
              height={300}
              width={300}
              src={image_url}
              alt={product_name}
              priority
            />
          </Link>
          <div className="lg:max-w-xl w-full lg:p-5">
            <Link
              href={`/product/${product_code}`}
              className="hover:underline hover:text-primary block duration-0 mb-3 text-sm font-semibold"
            >
              {product_name.length > 85
                ? product_name.slice(0, 85) + "..."
                : product_name}
            </Link>
            <div className="pl-4 leading-6 capitalize text-dim last:text-[13px]">
              <ul className="list-disc">
                <li>
                  Category:&nbsp;
                  <Link
                    href={`/${category}`}
                    className="text-secondary hover:text-primary hover:underline duration-0"
                  >
                    {category}
                  </Link>
                </li>
                <li>
                  Brand:&nbsp;
                  <Link
                    href={`/${category.toLowerCase()}/${brand.toLowerCase()}`}
                    className="text-secondary hover:text-primary hover:underline duration-0"
                  >
                    {brand}
                  </Link>
                </li>
                <li>
                  Rating:&nbsp;
                  <Rate
                    disabled
                    rootClassName="text-sm [&>li]:!mr-[.14rem] "
                    defaultValue={rating}
                    allowHalf
                  />
                </li>
                <li>
                  Status:&nbsp;
                  {status ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-600">Out Of Stock</span>
                  )}
                </li>
              </ul>
              <ul className="text-[13px]">
                {Object.entries(features)
                  .slice(0, 4)
                  .map(([title, value]) => (
                    <li className="list-disc" key={title}>
                      {title}:&nbsp;{value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-5 w-full lg:w-fit">
          <p className="text-xl text-center mb-3.5">
            {Number(price).toLocaleString()}&#2547;
          </p>
          <Button
            onClick={() => handleAddToPcBuilder(product_code)}
            type="default"
            size="large"
            className="!text-sm font-semibold border-0 bg-secondary  hover:bg-secondary !text-white !rounded w-full lg:w-[100px] !h-[42px]"
          >
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
