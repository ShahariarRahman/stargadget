import Link from "next/link";
import Image from "next/legacy/image";
import { Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";

export default function SmallProductCard({ product }) {
  const { product_name, price, image_url, product_code } = product || {};
  return (
    <div className="flex gap-3 py-5 border-t text-[15px]">
      <Link className="w-full max-w-[5rem]" href={`/product/${product_code}`}>
        {
          <Image
            height={70}
            width={70}
            placeholder="blur"
            blurDataURL={image_url}
            src={image_url}
            alt={product_name}
          />
        }
      </Link>
      <div className="space-y-2">
        <Link
          href={`/product/${product_code}`}
          className="hover:underline hover:text-primary cursor-pointer leading-5 block duration-0"
        >
          {product_name.length > 85
            ? product_name.slice(0, 85) + "..."
            : product_name}
        </Link>
        <p className="text-primary font-semibold">{price} ৳</p>
        <Button
          className="!p-0 m-0 !text-[13px] !text-inherit opacity-80 hover:opacity-100 flex items-center duration-0 "
          type="link"
          size="small"
        >
          <PlusSquareOutlined />
          <span className="mt-[1px]">Add to Compare</span>
        </Button>
      </div>
    </div>
  );
}
