import Link from "next/link";
import { Button } from "antd";

export default function ProductInfoNav({ questions, reviews }) {
  return (
    <div className="max-w-xl flex gap-1 lg:gap-3">
      <Link className="w-full" href="#product-specification">
        <Button
          type="primary"
          size="large"
          className="!p-0 w-full font-semibold !rounded !bg-primary !text-xs sm:!text-sm"
        >
          Specification
        </Button>
      </Link>
      {[
        {
          label: "Description",
          path: "#product-description",
        },
        {
          label: `Questions (${questions?.length || 0})`,
          path: "#product-questions",
        },
        {
          label: `Reviews (${reviews?.length || 0})`,
          path: "#product-reviews",
        },
      ].map(({ label, path }) => (
        <Link key={path} className="w-full" href={path}>
          <Button
            type="primary"
            size="large"
            className="!p-0 w-full font-semibold !rounded !bg-white text-black hover:!bg-primary hover:!text-white !text-xs sm:!text-sm shadow-sm"
          >
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
