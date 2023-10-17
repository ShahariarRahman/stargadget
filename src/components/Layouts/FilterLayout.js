import FilterMenu from "@/components/UI/shared/Filter/FilterMenu";
import FilterContainer from "@/components/UI/shared/Filter/FilterContainer";
import Pagination from "@/components/UI/shared/Filter/Pagination";

export default function FilterLayout({ children }) {
  return (
    <div className="mt-4 xl:grid grid-cols-5 gap-5">
      <div className="col-span-1 hidden xl:block">
        <FilterContainer />
      </div>
      <div className="col-span-4">
        <FilterMenu />
        <div className="min-h-[50rem] py-2.5">{children}</div>
        <Pagination />
      </div>
    </div>
  );
}
