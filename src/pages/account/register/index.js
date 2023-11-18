import Link from "next/link";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import BreadcrumbLayout from "@/components/Layouts/BreadcrumbLayout";
import SocialAuthLayout from "@/components/Layouts/SocialAuthLayout";
import { underDevNotification } from "@/utils/underDev";

export default function RegisterPage() {
  return (
    <div>
      <h4 className="mb-5 text-xl text-secondary">Register Account</h4>
      <Form
        size="large"
        layout="vertical"
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={(values) => {
          underDevNotification();
          console.log(values);
        }}
      >
        <Form.Item
          hasFeedback
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
            },
          ]}
        >
          <Input allowClear prefix={<UserOutlined />} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Password"
          name="password"
          rules={[
            {
              required: true,
            },
            {
              type: "string",
            },
            {
              max: 20,
            },
            {
              min: 8,
            },
          ]}
        >
          <Input.Password
            allowClear
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="mt-3 !rounded  w-full !bg-secondary/90 hover:!bg-secondary"
          >
            Register
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="link"
            className="!p-0 !text-sm text-black hover:!text-secondary"
          >
            Forgot password?
          </Button>
        </Form.Item>
      </Form>

      <div className="flex items-center justify-between ">
        <p className="mb-0 mr-2 text-dim">Already have an account?</p>
        <Link href="/account/login">
          <Button
            type="default"
            className="!border-secondary !text-secondary hover:bg-secondary/90 hover:!text-white !rounded w-28"
          >
            Login Page
          </Button>
        </Link>
      </div>
    </div>
  );
}

RegisterPage.getLayout = function getLayout(page) {
  const items = [
    {
      title: "Account",
      path: "account/login",
    },
    {
      title: "Register",
      path: "account/register",
    },
  ];

  return (
    <RootLayout title="Register Account">
      <BreadcrumbLayout container navItems={items}>
        <SocialAuthLayout>{page}</SocialAuthLayout>
      </BreadcrumbLayout>
    </RootLayout>
  );
};
