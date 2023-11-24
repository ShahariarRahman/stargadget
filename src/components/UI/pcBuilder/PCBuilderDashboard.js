import { useRouter } from "next/router";
import { Button, Checkbox, Modal, Result } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { toInteger } from "lodash";
import { componentItems } from "@/utils/constant/componentItems";
import { config } from "@/config";

export default function PCBuilderDashboard({
  email,
  products,
  totalPrice,
  totalProduct,
  hideUnconfigured,
  setHideUnconfigured,
}) {
  const router = useRouter();

  // handleCompleteBuild Modal
  const handleCompleteBuild = () => {
    Modal.confirm({
      title: (
        <span>{`To build this PC you will cost ${toInteger(
          totalPrice
        ).toLocaleString()} ৳
      `}</span>
      ),
      okType: "default",
      okText: "Yes, Proceed",
      cancelText: "No, later",
      icon: <ExclamationCircleFilled />,
      content:
        "Are you want to proceed building your PC with those selected items?",
      async onOk() {
        const itemsRes = await fetch(
          `${config.apiBaseUrl}/pc_builder/${email}`,
          {
            method: "DELETE",
          }
        );
        const { success, message } = await itemsRes.json();
        if (success) {
          router.replace(router.asPath);
          return Modal.success({
            closable: true,
            width: 1000,
            centered: true,
            okType: "default",
            okText: "Back to Home",
            okCancel: true,
            cancelText: "Build More PC",
            icon: <></>,
            content: (
              <Result
                rootClassName="capitalize"
                status="success"
                title="Your Have Successfully Build Your PC!"
                subTitle={message}
              />
            ),
            onOk() {
              router.push("/");
            },
          });
        }
        return Modal.error({
          closable: true,
          width: 1000,
          centered: true,
          // footer: <></>, for no button
          okText: "Back to Home",
          icon: <></>,
          content: (
            <Result
              status="error"
              title="Failed to Building Your PC !"
              subTitle={message}
            />
          ),
          onOk() {
            router.push("/");
          },
        });
      },
      onCancel() {
        console.log("Cancelled");
      },
    });
  };

  // check if all required component chosen
  const requiredCtg = componentItems.core
    .filter(({ required }) => required)
    .map(({ category }) => category);

  const ctgOfChosenProducts = products.map(({ category }) => category);

  const isAllRequiredCtgChosen =
    requiredCtg.filter((ctg) => ctgOfChosenProducts.includes(ctg)).length ===
    requiredCtg.length;

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
            Hide Unconfigured Components
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
          <p className="text-lg">{totalPrice.toLocaleString()}৳</p>
          <span className="text-[11px]">{totalProduct} Items</span>
        </div>
        {isAllRequiredCtgChosen && (
          <Button
            onClick={handleCompleteBuild}
            type="default"
            size="large"
            className="!h-14 min-w-[8.6rem] !rounded-[7px] flex flex-col justify-center items-center border-0 !text-white bg-new-gradient bg-[400%,400%] animate-gradient"
          >
            <p className="text-lg pb-1 leading-5">Build Now</p>
            <span className="text-xs">Complete Build</span>
          </Button>
        )}
      </div>
    </div>
  );
}
