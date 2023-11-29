import { useState } from "react";
import { Radio } from "antd";
import { toInteger } from "lodash";

export default function PriceOptions({ price, regular_price }) {
  const [paymentOption, setPaymentOption] = useState("cash");

  return (
    <div className="max-w-3xl">
      <h4 className="py-2 text-lg">Payment Options</h4>
      <Radio.Group
        className="flex flex-wrap lg:flex-nowrap gap-3"
        onChange={(e) => setPaymentOption(e.target.value)}
        value={paymentOption}
      >
        <Radio
          rootClassName="gap-3"
          className={`text-[13px] leading-6 border-2 w-full md:w-fit min-w-[16rem] pt-2 pb-3 px-3 h-fit mt-2 ${
            paymentOption === "cash" ? "border-secondary" : "border-inherit"
          }`}
          value="cash"
        >
          <h2 className="text-xl font-semibold">{price?.toLocaleString()}৳</h2>
          <span className="text-dark">Cash Discount Price</span>
          <br />
          <span className="text-dim"> Online / Cash Payment</span>
        </Radio>
        <Radio
          rootClassName="gap-3"
          className={`text-[13px] leading-6 border-2 w-full md:w-fit min-w-[16rem] pt-2 pb-3 px-3 h-fit mt-2 ${
            paymentOption === "emi" ? "border-secondary" : "border-inherit"
          }`}
          value="emi"
        >
          <h2 className="text-xl font-semibold">
            {toInteger(regular_price / 12)?.toLocaleString()}৳/Month
          </h2>
          <span className="text-dark">
            Regular Price: {regular_price?.toLocaleString()}৳
          </span>
          <br />
          <span className="text-dim">0% EMI for up to 12 Months***</span>
        </Radio>
      </Radio.Group>
    </div>
  );
}
