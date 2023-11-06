import { Button } from "antd";
import { FileTextFilled } from "@ant-design/icons";
import { underDevNotification } from "@/utils/underDev";

export default function ProductQuestions() {
  return (
    <div id="product-questions" className="px-5 bg-white rounded shadow-sm">
      <div className="md:flex justify-between pt-6 pb-4 gap-4">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold">Questions ({0})</h3>
          <p className="text-dim">
            Have question about this product? Get specific details about this
            product from expert.
          </p>
        </div>
        <Button
          onClick={underDevNotification}
          type="default"
          size="large"
          className="!text-sm font-semibold border-2 !border-secondary !text-secondary hover:bg-secondary hover:!text-white !rounded max-w-[10rem] w-full mt-2 md:mt-0"
        >
          Ask Question
        </Button>
      </div>
      <div className="text-center flex flex-col items-center space-y-3 my-2 pt-10 p-14 border-t">
        <div className="bg-secondary/10 w-20 h-20 rounded-full flex justify-center items-center">
          <FileTextFilled className="text-4xl text-secondary" />
        </div>
        <p className="text-dim">
          There are no questions asked yet. Be the first one to ask a question.
        </p>
      </div>
    </div>
  );
}
