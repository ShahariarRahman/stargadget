import React from "react";
import { Button, Row, Col } from "antd";
import {
  GoogleOutlined,
  GithubOutlined,
  FacebookFilled,
} from "@ant-design/icons";

export default function SocialAuthLayout({ children }) {
  const continueWithButtons = [
    {
      provider: "GitHub",
      icon: GithubOutlined,
      bgColor: "#0d1117",
      handler: () => console.log("Continue with Github"),
    },
    {
      provider: "Google",
      icon: GoogleOutlined,
      bgColor: "#e94235",
      handler: () => console.log("Continue with Google"),
    },
    {
      provider: "Facebook",
      icon: FacebookFilled,
      bgColor: "#0674e8",
      handler: () => console.log("Continue with Facebook"),
    },
  ];

  return (
    <div className="mt-3 w-ful flex justify-center">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full bg-white shadow rounded pt-6 pb-12 px-8 gap-10 lg:gap-16 max-w-6xl">
        {children}
        <div className="space-y-5">
          <h4 className="text-secondary text-xl">
            Authentication with Social Account
          </h4>
          <p className="text-dim">
            Empower your access with ease through GitHub and Google Login. Your
            trust in us is the key to unlocking a world of possibilities. Secure
            your journey and welcome back to our platform, where innovation,
            convenience, and security converge.
          </p>
          <p className="underline text-dim">Continue with social account:</p>
          <Row className="gap-4">
            {continueWithButtons.map(({ provider, icon, bgColor, handler }) => (
              <Col span={24} key={provider}>
                <Button
                  onClick={handler}
                  size="large"
                  style={{ backgroundColor: bgColor }}
                  className="!w-full !text-white text-center flex items-center !p-0 border-0 !rounded"
                >
                  <div className="px-4 border-r">
                    {React.createElement(icon, { className: "text-2xl" })}
                  </div>
                  <div className="w-full pr-4">
                    <span className="hidden sm:inline">Continue with </span>
                    <span>GitHub</span>
                  </div>
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
