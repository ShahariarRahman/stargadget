import Image from "next/legacy/image";
import { Images } from "@/utils/images";

export default function ProductImages({ image_url, product_name }) {
  return (
    <div className="flex flex-col items-center md:ml-8 gap-8">
      <div className="w-[16rem] lg:w-[28rem] max-w-sm">
        {image_url && (
          <Image
            quality={100}
            height={400}
            width={400}
            blurDataURL={image_url}
            placeholder="blur"
            className="hover:opacity-90 cursor-pointer"
            layout="responsive"
            src={image_url}
            alt={product_name}
          />
        )}
      </div>
      <div className="flex">
        {image_url &&
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`w-[3.5rem] max-w-sm border p-2.5 ${
                index === 0 ? "border-r-0" : index === 2 ? "border-l-0" : ""
              }
              `}
            >
              <Image
                quality={50}
                height={60}
                width={60}
                blurDataURL={image_url}
                placeholder="blur"
                className="hover:opacity-90 cursor-pointer"
                layout="responsive"
                src={image_url}
                alt={product_name}
              />
            </div>
          ))}
      </div>
      <div className="w-[16rem] lg:w-[28rem] max-w-sm">
        <Image
          className="hover:opacity-90 cursor-pointer"
          blurDataURL={Images.other.bKashOffer}
          placeholder="blur"
          layout="responsive"
          src={Images.other.bKashOffer}
          alt={"bKash offer"}
        />
      </div>
    </div>
  );
}
