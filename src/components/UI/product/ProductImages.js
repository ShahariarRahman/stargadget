import Image from "next/legacy/image";
import { Images } from "@/utils/images";

export default function ProductImages({ image_url, product_name }) {
  return (
    <div className="flex flex-col items-center md:ml-8 gap-8">
      <div className="w-[16rem] lg:w-[28rem] max-w-sm">
        {image_url && (
          <Image
            quality={50}
            height={200}
            width={200}
            blurDataURL={image_url}
            placeholder="blur"
            className="hover:opacity-90 cursor-pointer"
            layout="responsive"
            src={image_url}
            alt={product_name}
          />
        )}
      </div>
      <div className="flex gap-2">
        {image_url &&
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-[2rem] lg:w-[3rem] max-w-sm border p-2"
            >
              <Image
                quality={50}
                height={200}
                width={200}
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
