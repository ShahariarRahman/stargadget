import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Checkbox } from "antd";
import { helpers } from "@/utils/helpers";

export default function Availability({ options }) {
  const { query, pathname, push } = useRouter();
  const [select, setSelect] = useState(new Set([]));

  useEffect(() => {
    setSelect(new Set(query.availability?.split(",")));
  }, [query.availability]);

  const handleOptionChange = useCallback(
    (name) => (e) => {
      e.target.checked ? select.add(name) : select.delete(name);
      select.size
        ? (query.availability = Array.from(select))
        : delete query.availability;
      const queryStr = helpers.makeQuery(query, pathname);
      push(queryStr);
    },
    [select, query, pathname, push]
  );

  return (
    <div className="bg-white mt-1 pt-3 pb-5 rounded shadow-sm">
      <h3 className="text-base my-auto font-semibold border-b pb-3 px-4">
        Availability
      </h3>
      <div className="mt-4 mb-2 space-y-1 px-4">
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
