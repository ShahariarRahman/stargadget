import { Input, Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { underDevNotification } from "@/utils/underDev";

export default function Cart({ open, setOpen }) {
  return (
    <Drawer
      className="!bg-main"
      styles={{ header: { padding: 0 } }}
      title={
        <div className="flex justify-between text-white px-6 py-[12.6px]">
          <h3 className="font-sm">YOUR CART</h3>
          <CloseOutlined
            onClick={() => setOpen({ cart: false })}
            className="text-[1.4rem] pl-1"
          />
        </div>
      }
      placement="right"
      closable={false}
      onClose={() => setOpen({ cart: false })}
      open={open.cart}
    >
      <div className="bg-white text-dark h-full text-center flex flex-col justify-between">
        <h5 className="py-5 lg:text-base text-main">
          Your shopping cart is empty!
        </h5>
        <div className="mb-10 text-base">
          <div className="bg-secondary/10 p-3 flex space-x-2">
            <Input
              className="bg-white rounded w-full hover:bg-white"
              placeholder="Promo Code"
              allowClear
              bordered={false}
              size="large"
            />
            <Button
              onClick={underDevNotification}
              className="bg-secondary !border-none !rounded !text-white font-semibold"
              size="large"
            >
              Apply
            </Button>
          </div>
          <div className="py-3 px-3 flex justify-between border-b">
            <span className="text-dim text-right w-1/2">Sub-Total</span>
            <span className="font-semibold">0৳</span>
          </div>
          <div className="py-3 px-3 flex justify-between">
            <span className="text-dim text-right w-1/2">Total</span>
            <span className="font-semibold">0৳</span>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
