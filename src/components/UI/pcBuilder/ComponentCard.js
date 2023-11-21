import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "antd";

export default function ComponentCard({ component }) {
  const { category, categoryImg, categoryName, required } = component;

  return (
    <div className="flex px-2.5 py-3 border-b gap-2">
      <div className="flex space-x-1.5 sm:space-x-5  w-full">
        <div className="p-4 bg-secondary/10 rounded">
          <div className="w-10">
            <Image
              style={{
                filter:
                  "invert(23%) sepia(88%) saturate(1707%) hue-rotate(219deg) brightness(88%) contrast(120%)",
              }}
              height={100}
              width={100}
              layout="responsive"
              placeholder="blur"
              blurDataURL={categoryImg}
              src={categoryImg}
              alt={categoryName}
            />
          </div>
        </div>
        <div className="min-h-[4rem] w-full flex flex-col justify-center space-y-2.5">
          <div className="text-xs">
            <span className="font-semibold text-dim">{categoryName}</span>
            {required && (
              <span className="hidden xl:inline-block ml-1.5 bg-dark/50 text-white rounded-sm px-[2px]">
                Required
              </span>
            )}
          </div>
          <div className="bg-dark/5 max-w-4xl w-2/3 h-4"></div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col-reverse xl:flex-row items-center justify-center gap-4 xl:gap-6">
        <div className="hidden xl:flex items-center w-full">
          <p className="bg-dark/5 w-full h-4"></p>
        </div>
        <hr className="border-l h-12 hidden xl:block" />
        <div className="w-full flex justify-end">
          <Link href={`pc_builder/choose?productCategory=${category}`}>
            <Button
              type="default"
              size="large"
              className="!text-sm font-semibold border-2 !border-secondary !text-secondary hover:bg-secondary hover:!text-white !rounded w-fit sm:min-w-[7rem] !h-12"
            >
              Choose
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
