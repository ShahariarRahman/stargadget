import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Checkbox } from "antd";
import { helpers } from "@/utils/helpers";

export default function Availability({ options }) {
  const router = useRouter();
  const [select, setSelect] = useState(new Set([]));

  useEffect(() => {
    setSelect(new Set(router.query.availability?.split(",")));
  }, [router.query.availability]);

  const handleOptionChange = useCallback(
    (name) => (e) => {
      e.target.checked ? select.add(name) : select.delete(name);
      const { category, ...filterQuery } = router.query;
      select.size
        ? (filterQuery.availability = Array.from(select))
        : delete filterQuery.availability;
      const queryStr = helpers.makeQuery(filterQuery);
      router.push(`${category.join("/")}/${queryStr}`);
    },
    [router, select]
  );

  return (
    <div className="bg-white mt-1 px-4 pt-3 pb-5 rounded shadow-sm">
      <h3 className="text-base my-auto font-semibold border-b pb-3">
        Availability
      </h3>
      <div className="mt-4 mb-2 space-y-1">
        {options.map(([label, name]) => (
          <div key={name}>
            <Checkbox
              onChange={handleOptionChange(name)}
              checked={select.has(name)}
            >
              {label}
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
}
