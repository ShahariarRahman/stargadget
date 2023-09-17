import { Popover } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Compare({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      className="cursor-pointer"
      overlayInnerStyle={{ padding: 0, borderRadius: 0 }}
      onOpenChange={(newOpen) => setOpen(newOpen)}
      open={open}
      trigger="click"
      content={
        <div className="text-center h-32">
          <div className="p-3">Your compare list is empty!</div>
        </div>
      }
      title={
        <div className="bg-main text-white w-96 p-3 flex justify-between">
          <h5>Compare Product</h5>
          <CloseOutlined onClick={() => setOpen(false)} />
        </div>
      }
    >
      <div>{children}</div>
    </Popover>
  );
}
