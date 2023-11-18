import Link from "next/link";
import Image from "next/legacy/image";
import { builderActionsItems } from "@/utils/constant/builderActionsItems";
import logo from "@/assets/images/logo.png";

export default function PCBuilderHeading() {
  return (
    <div className="bg-secondary/[.03]">
      <div className="p-2 xl:p-4 flex justify-between items-center">
        <div className="w-28 pb-1.5 my-auto">
          <Image placeholder="blur" blurDataURL={logo} src={logo} alt="logo" />
        </div>
        <div className="flex">
          {builderActionsItems.map(([Icon, label, path], index) => (
            <Link
              href={`/${path}`}
              key={index}
              className="flex flex-col items-center justify-between w-12 xl:w-20 border-r text-dim hover:text-dark duration-0"
            >
              <Icon className="text-xl text-primary" />
              <span className="hidden xl:flex mt-2 text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
