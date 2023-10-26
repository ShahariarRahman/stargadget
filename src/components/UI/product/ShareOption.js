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
        <span>
          <FacebookFilled className="text-base" />
        </span>
        <span>
          <TwitterCircleFilled className="text-base" />
        </span>
      </div>
      <div className="space-x-2 xs:space-x-6">
        <span className="space-x-1.5">
          <BookOutlined className="text-base" />
          <span>Save</span>
        </span>
        <span className="space-x-1.5">
          <PlusSquareFilled className="text-base" />
          <span>
            <span className="hidden xs:inline">Add to</span>
            <span> Compare</span>
          </span>
        </span>
      </div>
    </div>
  );
}
