import { notification } from "antd";
export const underDevNotification = () => {
  notification.info({
    duration: 4,
    message: "This feature hasn't been implemented",
    description:
      "Hold tight! The feature you're seeking hasn't been implemented, but it's in my development plan.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};
