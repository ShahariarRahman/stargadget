import PriceRange from "@/components/UI/shared/Filter/PriceRange";
import { filteringOptions } from "@/utils/constant/filteringOptions";
const { priceRange } = filteringOptions;

export default function FilterLayout({ children }) {
  return (
    <div className="mt-4 lg:grid grid-cols-5 gap-5">
      <div className="col-span-1 hidden lg:block">
        <PriceRange options={priceRange} />
      </div>
      <div className="col-span-4">
        <div className="flex flex-col justify-between">{children}</div>
      </div>
    </div>
  );
}
