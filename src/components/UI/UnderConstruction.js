import Link from "next/link";
import Image from "next/legacy/image";
import { Button, Result } from "antd";
import { Images } from "@/utils/images";
import useTimer from "@/hooks/useTimer";

export default function UnderConstruction() {
  const [timer] = useTimer(10);

  return (
    <div className="flex justify-center">
      <Result
        icon={
          <Image
            blurDataURL={Images.other.underConstruction}
            placeholder="blur"
            src={Images.other.underConstruction}
            alt={"under construction"}
          />
        }
        title="Page is Under Construction"
        subTitle={
          <span>
            Sorry, the page you requested is under construction!{" "}
            <span className="text-primary underline">
              redirecting to home in {timer} seconds
            </span>
          </span>
        }
        extra={
          <Link href="/">
            <Button type="default">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}
