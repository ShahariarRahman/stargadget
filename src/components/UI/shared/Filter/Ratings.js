import { useCallback, useEffect, useState } from "react";
import { Checkbox, Rate } from "antd";
import { useRouter } from "next/router";
import { helpers } from "@/utils/helpers";

export default function Ratings({ options }) {
  const { query, pathname, push } = useRouter();
  const [select, setSelect] = useState(new Set());

  useEffect(() => {
    setSelect(new Set(query.rating?.split(",")));
  }, [query.rating]);

  const handleOptionChange = useCallback(
    (name) => (e) => {
      e.target.checked ? select.add(name) : select.delete(name);
      select.size ? (query.rating = Array.from(select)) : delete query.rating;
      const queryStr = helpers.makeQuery(query, pathname);
      push(queryStr);
    },
    [select, query, pathname, push]
  );

  return (
    <div className="bg-white mt-1 pt-3 pb-5 rounded shadow-sm">
      <h3 className="text-base my-auto font-semibold border-b pb-3 px-4">
        Ratings
      </h3>
      <div className="mt-4 mb-2 space-y-1 px-4">
        {options.map((rating) => (
          <div key={rating}>
            <Checkbox
              onChange={handleOptionChange(rating)}
              checked={select.has(rating)}
            >
              <Rate
                className="text-base [&>li]:!mr-[.14rem]"
                disabled
                defaultValue={rating}
              />
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
}
