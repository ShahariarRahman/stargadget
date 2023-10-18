import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Drawer, Select } from "antd";
import { FilterOutlined, CloseOutlined } from "@ant-design/icons";
import { helpers } from "@/utils/helpers";
import { filteringOptions } from "@/utils/constant/filteringOptions";
import FilterContainer from "@/components/UI/shared/Filter/FilterContainer";

export default function FilterMenu() {
  const { showOptions, sortOptions, name } = filteringOptions.filterMenu;
  const [displayOption, setDisplayOption] = useState({});
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDisplayOption({
      limit: router.query.limit || showOptions[0],
      sort: router.query.sort || sortOptions[0],
    });
  }, [router.query, showOptions, sortOptions]);

  const { category, ...filterQuery } = router.query;

  const handleLimitChange = (value) => {
    filterQuery.limit = value;
    const queryStr = helpers.makeQuery(filterQuery);
    router.push(`${category.join("/")}/${queryStr}`);
  };

  const handleSortChange = (value) => {
    filterQuery.sort = value;
    const queryStr = helpers.makeQuery(filterQuery);
    router.push(`${category.join("/")}/${queryStr}`);
  };

  return (
    <div className="bg-white flex justify-between p-2 rounded shadow-sm font-semibold">
      <h3 className="text-base my-auto ml-2 hidden xl:block">{name}</h3>
      <Button
        onClick={() => setOpen(true)}
        type="text"
        className="ml-2 flex xl:hidden items-center bg-dark/5 rounded"
      >
        <FilterOutlined className="mt-[.02rem]" />
        <span className="!hidden xs:!inline">Filter</span>
      </Button>
      <Drawer
        width={280}
        closable={false}
        open={open}
        onClose={() => setOpen(false)}
        className="mt-[50px]"
        placement="right"
      >
        <div>
          <Button
            className="absolute -left-10 !py-0 hover:!bg-inherit"
            onClick={() => setOpen(false)}
            type="text"
          >
            <CloseOutlined className="text-lg text-white" />
          </Button>
          <FilterContainer />
        </div>
      </Drawer>
      <div className="space-x-2">
        <span className="space-x-2 hidden lg:inline">
          <span className="opacity-80">Show:</span>
          <Select
            bordered={false}
            value={displayOption.limit}
            style={{
              width: 60,
              backgroundColor: "#f1f3f5",
              borderRadius: "0.25rem",
            }}
            onChange={(value) => handleLimitChange(value)}
            options={showOptions.map((numOfIProducts) => ({
              label: numOfIProducts,
              value: numOfIProducts,
            }))}
          />
        </span>
        <span className="space-x-2">
          <span className="opacity-80 hidden xs:inline">Sort By:</span>
          <Select
            bordered={false}
            value={displayOption.sort}
            style={{
              width: 157,
              backgroundColor: "#f1f3f5",
              borderRadius: "0.25rem",
            }}
            onChange={(value) => handleSortChange(value)}
            options={sortOptions.map(([label, value]) => ({
              label,
              value,
            }))}
          />
        </span>
      </div>
    </div>
  );
}
