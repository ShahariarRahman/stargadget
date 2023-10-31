import Link from "next/link";
import { Button, Rate } from "antd";

export default function ViewMoreOption({ rating }) {
  return (
    <div>
      <Link
        href="#product-specification"
        className="py-2 border-b hover:border-b-2 border-primary"
      >
        <Button
          type="text"
          className="p-0 hover:!bg-inherit text-primary hover:!text-primary"
        >
          View More Info
        </Button>
      </Link>
      <Rate
        className="py-2 text-base [&>li]:!mr-[.14rem] block"
        disabled
        defaultValue={rating}
        allowHalf
      />
    </div>
  );
}
