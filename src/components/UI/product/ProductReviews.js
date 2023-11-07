import { Button, Card, Rate, Typography } from "antd";
import { FileTextFilled } from "@ant-design/icons";
import { underDevNotification } from "@/utils/underDev";
const { Title, Paragraph } = Typography;

export default function ProductReviews({ reviews }) {
  return (
    <div id="product-reviews" className="px-5 bg-white rounded shadow-sm">
      <div className="md:flex justify-between pt-6 pb-4 gap-4">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold">
            Reviews ({reviews?.length || 0})
          </h3>
          <p className="text-dim">
            Get specific details about this product from customers who own it.
          </p>
        </div>
        <Button
          onClick={underDevNotification}
          type="default"
          size="large"
          className="!text-sm font-semibold border-2 !border-secondary !text-secondary hover:bg-secondary hover:!text-white !rounded max-w-[10rem] w-full mt-2 md:mt-0"
        >
          Write a Review
        </Button>
      </div>
      {reviews ? (
        <div className="text-center flex flex-col items-center pb-6">
          {reviews.map(({ user_email, review_comment, user_rating }, index) => (
            <Card
              key={index}
              bodyStyle={{ padding: 0 }}
              style={{ borderRadius: 0 }}
              className="w-full text-left border-x-0 border-b-0 border-t pt-3 my-1.5"
            >
              <Rate
                className="my-1 text-sm [&>li]:!mr-[0.14rem]"
                disabled
                defaultValue={user_rating}
                allowHalf
              />
              <Paragraph className="!my-2 lg:text-base">
                {review_comment}
              </Paragraph>
              <Title className="!my-0 lg:!my-1 !text-sm" level={5}>
                <span className="text-dim !font-normal">By&nbsp;</span>
                <span className="text-secondary">{user_email}</span>
              </Title>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center flex flex-col items-center space-y-3 my-2 pt-10 p-14 border-t">
          <div className="bg-secondary/10 w-20 h-20 rounded-full flex justify-center items-center">
            <FileTextFilled className="text-4xl text-secondary" />
          </div>
          <p className="text-dim">
            This product has no reviews yet. Be the first one to write a review.
          </p>
        </div>
      )}
    </div>
  );
}
