import { featuredCategoryItems } from "@/utils/constant/featuredCategoryItems";
import Image from "next/legacy/image";
import Link from "next/link";

export default function FeaturedCategory() {
  return (
    <div className="mt-10 text-center">
      <h3 className="text-xl font-semibold">Featured Category</h3>
      <p className="mt-1 text-dark">
        Get Your Desired Product from Featured Category!
      </p>
      <div className="mt-5 grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 text-dark">
        {featuredCategoryItems.map(([img, label, path], index) => (
          <Link
            href={`/${path}`}
            key={index}
            className="py-3 bg-white rounded-xl w-full cursor-pointer hover:text-primary leading-normal duration-0"
          >
            <div className="p-2 flex justify-center">
              <div className="w-full max-w-[2rem] md:max-w-full">
                <Image
                  style={{
                    filter:
                      "invert(9%) sepia(11%) saturate(7158%) hue-rotate(184deg) brightness(100%) contrast(102%)",
                  }}
                  className="opacity-95"
                  height={48}
                  width={48}
                  src={img}
                  alt={label}
                />
              </div>
            </div>
            <p className="text-[13px] lg:text-base">{label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
