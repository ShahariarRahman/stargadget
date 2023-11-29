import Link from "next/link";
import {
  TwitterCircleFilled,
  BookOutlined,
  PlusSquareFilled,
  FacebookFilled,
} from "@ant-design/icons";

export default function ShareOption() {
  return (
    <div className="flex justify-between py-3.5 px-5 mb-7 rounded-full lg:shadow border lg:border-none whitespace-nowrap gap-2">
      <div className="space-x-2.5">
        <span>Share:</span>
        <Link href="#">
          <FacebookFilled className="text-base" />
        </Link>
        <Link href="#">
          <TwitterCircleFilled className="text-base" />
        </Link>
      </div>
      <div className="space-x-2 xs:space-x-6">
        <Link href="#" className="space-x-1.5 hover:text-primary duration-0">
          <BookOutlined className="text-base" />
          <span>Save</span>
        </Link>
        <Link href="#" className="space-x-1.5 hover:text-primary duration-0">
          <PlusSquareFilled className="text-base" />
          <span>
            <span className="hidden xs:inline">Add to</span>
            <span> Compare</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
