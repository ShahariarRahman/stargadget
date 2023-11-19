import { Button, Checkbox } from "antd";

export default function PCBuilderDashboard({
  hideUnconfigured,
  setHideUnconfigured,
}) {
  return (
    <div className="flex flex-col items-center xl:flex-row xl:justify-between my-4 xl:my-[30px] gap-3">
      <div>
        <h6 className="text-secondary text-base font-bold hidden xl:block">
          PC Builder - Build Your Own Computer - Star Gadget
        </h6>
        <div className="text-center xl:text-left">
          <Checkbox
            className="text-dim/90 cursor-default text-[13px]"
            checked={hideUnconfigured}
            onChange={(e) => setHideUnconfigured(e.target.checked)}
          >
            Hide Unconsidered Components
          </Checkbox>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-3">
        <div className="border border-dashed border-primary h-14 relative min-w-[8.6rem] !rounded-[7px] flex flex-col justify-center items-center">
          <p className="text-lg">0W</p>
          <span className="text-dim/80 text-[11px] font-semibold">
            Estimated Wattage
          </span>
          <span className="text-secondary text-[10px] absolute top-[4px] right-[7px] font-bold">
            BETA
          </span>
        </div>
        <div className="bg-secondary h-14 min-w-[8.6rem] !rounded-[7px] flex flex-col justify-center items-center text-white">
          <p className="text-lg">{(999999).toLocaleString()}৳</p>
          <span className="text-[11px]">{20} Items</span>
        </div>

        <Button
          type="default"
          size="large"
          className="!h-14 min-w-[8.6rem] !rounded-[7px] flex flex-col justify-center items-center border-0 !text-white bg-new-gradient bg-[400%,400%] animate-gradient"
        >
          <p className="text-lg pb-1 leading-5">Build Now</p>
          <span className="text-xs">Complete Build</span>
        </Button>
      </div>
    </div>
  );
}
