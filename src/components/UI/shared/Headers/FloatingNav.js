import { Badge } from "antd";
import { PlusSquareFilled, ShoppingCartOutlined } from "@ant-design/icons";
import Compare from "@/components/UI/shared/Compare";

const FloatingButton = ({ Icon, label, value, ...restPros }) => (
  <Badge
    {...restPros}
    className="w-full text-white bg-main hover:bg-secondary rounded p-[7px] flex flex-col items-center gap-2 border border-white/20 cursor-pointer mt-3"
    offset={[0, 0]}
    size="default"
    color="#ef4a23"
    showZero
    count={
      <span className="bg-primary w-5 h-5 flex items-center justify-center rounded-full">
        {value}
      </span>
    }
  >
    <Icon className="text-white text-2xl" />
    <small className="text-[10px] opacity-80 font-semibold">{label}</small>
  </Badge>
);

export default function FloatingNav({ setOpen }) {
  return (
    <div className="hidden xl:block fixed z-50 right-0 bottom-0 uppercase text-white m-5">
      <Compare>
        <FloatingButton Icon={PlusSquareFilled} label="Compare" value={0} />
      </Compare>
      <FloatingButton
        onClick={() => setOpen({ cart: true })}
        Icon={ShoppingCartOutlined}
        label="Cart"
        value={0}
      />
    </div>
  );
}
