import { useState } from "react";
import { Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { underDevNotification } from "@/utils/underDev";

export default function CartOption() {
  const [cartNumber, setCartNumber] = useState(1);

  return (
    <div className="pt-7 flex flex-wrap gap-5">
      <InputNumber
        style={{ width: "138px" }}
        addonAfter={
          <button
            onClick={() => setCartNumber((prevNumber) => ++prevNumber)}
            className="p-3 hover:bg-black/10"
          >
            <PlusOutlined className="text-sm" />
          </button>
        }
        addonBefore={
          <button
            onClick={() =>
              setCartNumber((prevNumber) => (prevNumber > 1 ? --prevNumber : 1))
            }
            className="p-3 hover:bg-black/10"
          >
            <MinusOutlined className="text-sm" />
          </button>
        }
        size="large"
        controls={false}
        value={cartNumber}
        min={1}
        max={100}
        onChange={(value) => setCartNumber(value)}
      />
      <Button
        onClick={underDevNotification}
        type="primary"
        size="large"
        className="font-semibold !rounded max-w-[7rem] md:max-w-[13rem] w-full !bg-secondary/90 hover:!bg-secondary"
      >
        Buy Now
      </Button>
    </div>
  );
}
