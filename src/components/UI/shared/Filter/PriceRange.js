import { Input, Slider } from "antd";
import { useState } from "react";

export default function PriceRange({ options }) {
  const { defaultRange, maxRange } = options;
  const [range, setRange] = useState(defaultRange);

  return (
    <div className="bg-white px-4 pt-3 pb-5 rounded shadow-sm">
      <h3 className="text-base my-auto font-semibold border-b pb-3">
        Price Range
      </h3>
      <Slider
        tooltip={{ formatter: null }}
        onChange={(values) => setRange(values)}
        className="mt-8 mb-5"
        min={maxRange[0]}
        max={maxRange[1]}
        range
        value={range}
      />
      <div className="flex justify-between space-x-2">
        <Input value={range[0]} className="w-24" />
        <Input value={range[1]} className="w-24" />
      </div>
    </div>
  );
}
