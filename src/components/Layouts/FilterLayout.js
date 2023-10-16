import FilterMenu from "@/components/UI/shared/Filter/FilterMenu";
import FilterContainer from "@/components/UI/shared/Filter/FilterContainer";

export default function FilterLayout({ children }) {
  return (
    <div className="mt-4 lg:grid grid-cols-5 gap-5">
      <div className="col-span-1 hidden lg:block">
        <FilterContainer />
      </div>
      <div className="col-span-4">
        <FilterMenu />
        <div className="flex flex-col justify-between">{children}</div>
      </div>
    </div>
  );
}
