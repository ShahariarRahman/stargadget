import PriceRange from "@/components/UI/shared/Filter/PriceRange";
import Availability from "../UI/shared/Filter/Availability";
import { filteringOptions } from "@/utils/constant/filteringOptions";
import Ratings from "../UI/shared/Filter/Ratings";
const { priceRange, availability, rating } = filteringOptions;

export default function FilterLayout({ children }) {
  return (
    <div className="mt-4 lg:grid grid-cols-5 gap-5">
      <div className="col-span-1 hidden lg:block">
        <PriceRange options={priceRange} />
        <Availability options={availability} />
        <Ratings options={rating} />
      </div>
      <div className="col-span-4">
        <div className="flex flex-col justify-between">{children}</div>
      </div>
    </div>
  );
}
