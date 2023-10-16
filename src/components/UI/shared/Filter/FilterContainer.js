import PriceRange from "@/components/UI/shared/Filter/PriceRange";
import Availability from "@/components/UI/shared/Filter/Availability";
import Ratings from "@/components/UI/shared/Filter/Ratings";
import { filteringOptions } from "@/utils/constant/filteringOptions";
const { priceRange, availability, rating } = filteringOptions;

export default function FilterContainer() {
  return (
    <div>
      <PriceRange options={priceRange} />
      <Availability options={availability} />
      <Ratings options={rating} />
    </div>
  );
}
